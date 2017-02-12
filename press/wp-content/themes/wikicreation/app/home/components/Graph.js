import React from 'react';
import ReactDom from 'react-dom';

import {connect} from 'react-redux';

import {getGraphData} from '../async';
import GraphController from '../d3/GraphController';
import GraphModel from '../d3/GraphModel';
import GraphView from '../d3/GraphView';

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
    this.model = new GraphModel(this.props.data);
  },
  componentDidMount : function () { this.setView() },
  shouldComponentUpdate : function (nextProps)
  {
    if (!this.props.isDone && nextProps.isDone) return true;
    return false;
  },
  componentWillUpdate : function (nextProps) {
    this.model = new GraphModel(nextProps.data);
  },
  componentDidUpdate : function () { this.setView() },
  componentWillUnmount : function () {
    this.view = null;
    this.model = null;
    this.controller = null;
  },
  setView : function () {
    let elt = ReactDom.findDOMNode(this);
    this.view = new GraphView(this.model, elt);
    this.controller = new GraphController(this.model, this.view);
    this.view.start();
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
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Graph);
