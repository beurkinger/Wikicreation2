import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getArticles} from '../async';
import {getCategories} from '../../shared/async';
import ArticlesAside from './ArticlesAside';
import ArticlesContent from './ArticlesContent';

const Articles = React.createClass({
  componentWillMount : function () {
    getCategories();
    getArticles();
    this.props.setTitlebar();
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

const mapDispatchToProps = function(dispatch) {
  return {
    setTitlebar: () => dispatch(setStdTitlebar('Articles'))
  }
};

module.exports = connect(null, mapDispatchToProps)(Articles);
