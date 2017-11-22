import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AuthorCard from './AuthorCard';
import PageLoading from '../../shared/components/PageLoading';
import Logos from '../../logos/components/Logos';
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
        <Logos />
      </div>
      <BackToTop target="#authors-main"></BackToTop>
    </div>
  )
};

AuthorsContent.propTypes = {
  authors : PropTypes.array.isRequired,
  isAuthorsDone : PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({
   authors: store.authors.list,
   isAuthorsDone : store.authors.isDone
});

module.exports = connect(mapStateToProps)(AuthorsContent);
