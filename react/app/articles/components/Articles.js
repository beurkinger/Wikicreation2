import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getArticles} from '../async';
import ArticlesAside from './ArticlesAside';
import ArticlesContent from './ArticlesContent';

const Articles = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    getArticles();
    this.updateTitlebar(this.props);
  },
  componentWillUpdate : function (nextProps) {
    this.updateTitlebar(nextProps);
  },
  updateTitlebar : function (props) {
    this.props.setTitlebar(props.title);
  },
  render: function () {
    return (
      <main id="main-container">
        <ArticlesAside />
        <ArticlesContent />
      </main>
    )
  }
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.articles.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar : (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Articles);
