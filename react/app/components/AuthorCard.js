import React from 'react';

import * as async from './async';
import * as actions from './actions';
import {connect} from 'react-redux';

const AuthorCard = props => {
  const handleAuthorClick = () => {
    async.getAuthor(props.id);
    props.showAuthorPanel();
  };
  return (
    <div className="author" onClick={handleAuthorClick} >
      <img className="author-pic" src={ "/img/" +  props.pic }/>
      <div className="author-infos">
        <h3 className="author-name">
          {props.name}
        </h3>
        <p className="author-desc">
          {props.title}
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
  pic : React.PropTypes.string.isRequired,
  showAuthorPanel : React.PropTypes.func.isRequired
};

const mapDispatchToProps = function(dispatch) {
  return {
    showAuthorPanel: () => dispatch(actions.showAuthorPanel())
  }
};

module.exports = connect(null, mapDispatchToProps)(AuthorCard);
