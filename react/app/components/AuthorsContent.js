import React from 'react';
import {connect} from 'react-redux';

import AuthorCard from './AuthorCard';

const AuthorsContent = React.createClass({
  propTypes : {
    authors : React.PropTypes.array.isRequired,
  },
  render: function () {
    return (
      <div id="main-content">
        <div id="authors-main">
          <AuthorCard />
        </div>
      </div>
    )
  }
});

const mapStateToProps = function (store) {
   return {
     authors: store.authors.list
   };
};

module.exports = connect(mapStateToProps)(AuthorsContent);
