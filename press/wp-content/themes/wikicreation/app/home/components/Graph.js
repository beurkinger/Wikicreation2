import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

import {getGraphData} from '../async';
import {getPreview} from '../../preview/async';
import GraphController from '../d3/GraphController';
import GraphModel from '../d3/GraphModel';
import GraphView from '../d3/GraphView';
import {showPreviewPanel} from '../../preview/actions';


const Graph = React.createClass({
  propTypes : {
    isDone : React.PropTypes.bool.isRequired,
    data : React.PropTypes.shape({
      nodes : React.PropTypes.array.isRequired,
      links : React.PropTypes.array.isRequired
    })
  },
  componentWillMount : function () {
    getGraphData();
    this.setModel(this.props.data);
  },
  componentDidMount : function () {
    this.startD3();
    window.addEventListener("resize", this.resize);
  },
  shouldComponentUpdate : function (nextProps)
  {
    if (!this.props.isDone && nextProps.isDone) return true;
    return false;
  },
  componentWillUpdate : function (nextProps) {
    this.stopD3();
    this.setModel(nextProps.data);
  },
  componentDidUpdate : function () {
    this.startD3()
  },
  componentWillUnmount : function () {
    this.stopD3();
    window.removeEventListener("resize", this.resize);
  },
  setModel : function (data)
  {
    this.model = new GraphModel(data);
  },
  startD3 : function () {
    let elt = ReactDom.findDOMNode(this);
    this.view = new GraphView(this.model, elt);
    this.controller = new GraphController(this.model, this.view, this.clickHandler);
    this.view.start();
  },
  stopD3 : function () {
    if (this.view) this.view.stop();
    if (this.controller) this.controller.stop();
    this.view = null;
    this.model = null;
    this.controller = null;
  },
  resize : function () {
    this.stopD3();
    this.setModel(this.props.data);
    this.startD3();
  },
  clickHandler : function (id) {
    getPreview(parseInt(id));
    this.props.showPreviewPanel();
  },
  render : function () {
    return <div id="graph"><canvas></canvas></div>
  }
});

const mapStateToProps = (store) => ({
  isDone : store.graphData.isDone,
  data : store.graphData.data
});

const mapDispatchToProps = (dispatch) => ({
  showPreviewPanel: () => dispatch(showPreviewPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Graph);
