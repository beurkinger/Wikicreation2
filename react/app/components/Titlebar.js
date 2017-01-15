import React from 'react';
import { connect } from 'react-redux';

import { PAGE_TYPE_STD, PAGE_TYPE_ARTICLE } from './constants';

const Titlebar = React.createClass({
  propTypes: {
    isVisible : React.PropTypes.bool.isRequired,
    pageType : React.PropTypes.string.isRequired,
    title : React.PropTypes.string.isRequired
  },
  getContent : function ()
  {
    return this.props.title;
  },
  render: function () {
    return (
      <div id="main-title" style={{'display' : this.props.isVisible ? 'block' : 'none'}}>
        {this.getContent()}
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    isVisible : store.titlebar.isVisible,
    pageType : store.titlebar.pageType,
    title : store.titlebar.title
  }
};

module.exports = connect(mapStateToProps)(Titlebar);
