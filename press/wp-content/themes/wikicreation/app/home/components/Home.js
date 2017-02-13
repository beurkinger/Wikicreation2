import React from 'react';
import {connect} from 'react-redux';

import {emptyTitlebar} from '../../header/actions';
import {showPreviewPanel} from '../../preview/actions';
import {getPreview} from '../../preview/async';
import Graph from './Graph';

const Home = React.createClass({
  propTypes : {
    emptyTitlebar : React.PropTypes.func.isRequired,
    showPreviewPanel : React.PropTypes.func.isRequired,
  },
  componentWillMount : function () {
    this.props.emptyTitlebar();
  },
  preview : function () {
    getPreview(1);
    this.props.showPreviewPanel();
  },
  render : function () {
    return (
      <main id="main-container">
        <btn style={{display : 'block', margin : '400px'}} onClick={this.preview} >yolo</btn>
      </main>
    )
  }
});

const mapDispatchToProps = (dispatch) => ({
  emptyTitlebar: () => dispatch(emptyTitlebar()),
  showPreviewPanel: () => dispatch(showPreviewPanel())
});

module.exports = connect(null, mapDispatchToProps)(Home);
