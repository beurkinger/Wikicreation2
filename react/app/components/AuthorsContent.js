import React from 'react';
import {connect} from 'react-redux';

import AuthorCard from './AuthorCard';

const AuthorsContent = React.createClass({
  propTypes : {
    authors : React.PropTypes.array.isRequired,
  },
  getAuthor : (author) => (
    <AuthorCard id={author.id}
                name={author.name}
                title={author.title}
                pic={author.pic}
                key={author.id} />
  ),
  render: function () {
    return (
      <div id="main-content">
        <div id="authors-main">
          { this.props.authors.map(this.getAuthor) }
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
