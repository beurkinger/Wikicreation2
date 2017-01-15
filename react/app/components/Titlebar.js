import React from 'react';
import { connect } from 'react-redux';

import { TITLE_TYPE_STD, TITLE_TYPE_ARTICLE } from './constants';

const Titlebar = React.createClass({
  propTypes: {
    isVisible : React.PropTypes.bool.isRequired,
    type : React.PropTypes.string.isRequired,
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
    type : store.titlebar.type,
    title : store.titlebar.title
  }
};

module.exports = connect(mapStateToProps)(Titlebar);
