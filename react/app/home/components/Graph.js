import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getGraphData} from '../async';
import {getPreview} from '../../preview/async';
import GraphController from '../d3/GraphController';
import GraphModel from '../d3/GraphModel';
import GraphView from '../d3/GraphView';
import {showPreviewPanel} from '../../preview/actions';

class Graph extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resize = this.resize.bind(this);
  }
  componentWillMount () {
    getGraphData();
    this.setModel(this.props.data);
  }
  componentDidMount () {
    this.startD3();
    window.addEventListener("resize", this.resize);
  }
  componentWillUpdate (nextProps) {
    this.stopD3();
    this.setModel(nextProps.data);
    if (this.props.locale !== nextProps.locale) {
      getGraphData();
    }
  }
  componentDidUpdate () {
    this.startD3()
  }
  componentWillUnmount () {
    this.stopD3();
    window.removeEventListener("resize", this.resize);
  }
  setModel (data) {
    this.model = new GraphModel(data);
  }
  startD3 () {
    let elt = ReactDom.findDOMNode(this);
    this.view = new GraphView(this.model, elt);
    this.controller = new GraphController(this.model, this.view, this.handleClick);
    this.view.start();
  }
  stopD3 () {
    if (this.view) this.view.stop();
    if (this.controller) this.controller.stop();
    this.view = null;
    this.model = null;
    this.controller = null;
  }
  resize () {
    this.stopD3();
    this.setModel(this.props.data);
    this.startD3();
  }
  handleClick (id) {
    getPreview(parseInt(id));
    this.props.showPreviewPanel();
  }
  render () {
    return (
      <div id="graph">
        <canvas></canvas>
      </div>
    )
  }
}

Graph.propTypes = {
  locale : PropTypes.string.isRequired,
  data : PropTypes.shape({
    nodes : PropTypes.array.isRequired,
    links : PropTypes.array.isRequired
  })
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  data : store.graphData.data
});

const mapDispatchToProps = (dispatch) => ({
  showPreviewPanel: () => dispatch(showPreviewPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Graph);
