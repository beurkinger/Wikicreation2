import React from 'react';
import {connect} from 'react-redux';

import AuthorCard from './AuthorCard';

const AuthorsContent = (props) => {
  const getAuthor = (author) => (
    <AuthorCard id={author.id}
                name={author.name}
                title={author.title}
                pic={author.pic}
                key={author.id} />
  );
  return (
    <div id="main-content">
      <div id="authors-main">
        { props.authors.map(getAuthor) }
      </div>
    </div>
  )
};

AuthorsContent.propTypes = {
  authors : React.PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({
   authors: store.authors.list
});

module.exports = connect(mapStateToProps)(AuthorsContent);
