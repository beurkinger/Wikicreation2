import React from 'react';
import browserHistory from 'react-router/lib/browserHistory'

import {getAuthor} from '../../author/async';
import {showAuthorPanel} from '../../author/actions';
import {connect} from 'react-redux';

const AuthorCard = props => {
  const getAuthorPicStyle = (picUrl) => ({
    backgroundImage : "url(/img/" + picUrl + ')',
    backgroundSize : 'cover'
   });
  const handleAuthorClick = () => {
    getAuthor(props.id);
    props.showAuthorPanel();
    browserHistory.push('/authors/' + props.id);
  };
  return (
    <div className="author" onClick={handleAuthorClick} >
      <div className="author-pic" style={getAuthorPicStyle(props.pic)}></div>
      <div className="author-infos">
        <h3 className="author-name">
          {props.name}
        </h3>
        <p className="author-desc">
          {props.title}, <br/>
          {props.school}
        </p>
      </div>
    </div>
  )
};

AuthorCard.propTypes =
{
  id : React.PropTypes.number.isRequired,
  name : React.PropTypes.string.isRequired,
  title : React.PropTypes.string.isRequired,
  school : React.PropTypes.string.isRequired,
  pic : React.PropTypes.string.isRequired,
  showAuthorPanel : React.PropTypes.func.isRequired
};

const mapDispatchToProps = function(dispatch) {
  return {
    showAuthorPanel: () => dispatch(showAuthorPanel())
  }
};

module.exports = connect(null, mapDispatchToProps)(AuthorCard);
