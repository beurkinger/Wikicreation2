import React from 'react';
import {connect} from 'react-redux';

import {emptyTitlebar} from '../../header/actions';
import {showPreviewPanel} from '../actions';
import Graph from './Graph';
import Preview from './Preview';
import PreviewBackground from './PreviewBackground';

import {getPreview} from '../async';

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
        <PreviewBackground />
        <Preview />
        <Graph />
      </main>
    )
  }
});

const mapDispatchToProps = (dispatch) => ({
  emptyTitlebar: () => dispatch(emptyTitlebar()),
  showPreviewPanel: () => dispatch(showPreviewPanel())
});

module.exports = connect(null, mapDispatchToProps)(Home);
