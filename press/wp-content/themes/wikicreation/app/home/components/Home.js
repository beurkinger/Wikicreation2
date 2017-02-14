import React from 'react';
import {connect} from 'react-redux';

import {emptyTitlebar} from '../../header/actions';
// import {showPreviewPanel} from '../../preview/actions';
// import {getPreview} from '../../preview/async';
import Graph from './Graph';
import PageLoading from '../../shared/components/PageLoading';

const Home = React.createClass({
  propTypes : {
    emptyTitlebar : React.PropTypes.func.isRequired,
    isDone : React.PropTypes.bool.isRequired
    // showPreviewPanel : React.PropTypes.func.isRequired,
  },
  componentWillMount : function () {
    this.props.emptyTitlebar();
  },
  // preview : function () {
  //   getPreview(1);
  //   this.props.showPreviewPanel();
  // },
  render : function () {
    return (
      <main id="main-container" className="graph-container">
        <PageLoading switches={[this.props.isDone]} />
        <Graph />
      </main>
    )
  }
});

// <btn style={{display : 'block', margin : '400px'}} onClick={this.preview} >yolo</btn>

const mapStateToProps = (store) => ({
  isDone : store.graphData.isDone
});

const mapDispatchToProps = (dispatch) => ({
  emptyTitlebar: () => dispatch(emptyTitlebar()),
  showPreviewPanel: () => dispatch(showPreviewPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);
