import React from 'react';
import { connect } from 'react-redux';

import { PAGE_TYPE_STD, PAGE_TYPE_ARTICLE } from './constants';

const Titlebar = React.createClass({
  propTypes: {
    isVisible : React.PropTypes.bool.isRequired,
    pageType : React.PropTypes.string.isRequired,
    title : React.PropTypes.string.isRequired,
    articleTitle : React.PropTypes.string.isRequired
  },
  getContent : function ()
  {
    if (this.props.pageType === PAGE_TYPE_STD)
    {
      return <h1 className="std-title">{this.props.title}</h1>;
    }
    else if (this.props.pageType === PAGE_TYPE_ARTICLE)
    {
      return <h1 className="article-title">{this.props.articleTitle}</h1>;
    }
  },
  render: function () {
    return (
      <div id="main-title-container" style={{'display' : this.props.isVisible ? 'block' : 'none'}}>
        {this.getContent()}
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    isVisible : store.titlebar.isVisible,
    pageType : store.titlebar.pageType,
    title : store.titlebar.title,
    articleTitle : store.article.title
  }
};

module.exports = connect(mapStateToProps)(Titlebar);
