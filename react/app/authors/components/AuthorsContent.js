import React from 'react';
import {connect} from 'react-redux';

import AuthorCard from './AuthorCard';
import PageLoading from '../../shared/components/PageLoading';
import BackToTop from '../../shared/components/BackToTop';

const AuthorsContent = (props) => {
  const getAuthor = (author) => (
    <AuthorCard id={parseInt(author.id)}
                name={author.name}
                title={author.title}
                school={author.school}
                pic={author.pic}
                key={author.id} />
  );
  return (
    <div id="main-content">
      <PageLoading switches={[props.isAuthorsDone]} />
      <div id="authors-main">
        { props.authors.map(getAuthor) }
      </div>
      <BackToTop target="#authors-main"></BackToTop>
    </div>
  )
};

AuthorsContent.propTypes = {
  authors : React.PropTypes.array.isRequired,
  isAuthorsDone : React.PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({
   authors: store.authors.list,
   isAuthorsDone : store.authors.isDone
});

module.exports = connect(mapStateToProps)(AuthorsContent);
