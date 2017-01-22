import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getArticles} from '../async';
import {getCategories} from '../../shared/async';
import ArticlesAside from './ArticlesAside';
import ArticlesContent from './ArticlesContent';

const Articles = React.createClass({
  propTypes : {
    messages : React.PropTypes.object.isRequired
  },
  componentWillMount : function () {
    getCategories();
    getArticles();
    this.props.setTitlebar(this.props.messages.title);
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
  messages : store.messages.strings.articles.main
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar : (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Articles);
