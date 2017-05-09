import React from 'react';
import PropTypes from 'prop-types';
import browserHistory from 'react-router/lib/browserHistory'

import {getAuthor} from '../../author/async';
import {showAuthorPanel} from '../../author/actions';
import {connect} from 'react-redux';

const AuthorCard = props => {
  const getAuthorPicStyle = (picUrl) => ({
    backgroundImage : 'url(' + picUrl + ')',
    backgroundSize : 'cover'
   });
  const handleAuthorClick = () => {
    getAuthor(props.id, props.showAuthorPanel);
    browserHistory.push('/' + props.locale + '/authors/' + props.id);
  };
  return (
    <div className="author" onClick={handleAuthorClick} >
      <div className="author-pic" style={getAuthorPicStyle('/' + props.pic)}></div>
      <div className="author-infos">
        <h3 className="author-name">
          {props.name}
        </h3>
        <p className="author-desc">
          {props.title}, {props.school}
        </p>
      </div>
    </div>
  )
};

AuthorCard.propTypes =
{
  locale : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  school : PropTypes.string.isRequired,
  pic : PropTypes.string.isRequired,
  showAuthorPanel : PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});


const mapDispatchToProps = function(dispatch) {
  return {
    showAuthorPanel: () => dispatch(showAuthorPanel())
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthorCard);
