import React from 'react';

const AuthorCard = props => (
  <div className="author">
    <img className="author-pic" src="/img/author-pic1.jpg"/>
    <div className="author-infos">
      <h3 className="author-name">
        <a href="#">
          Dominique Berthet
        </a>
      </h3>
      <p className="author-desc">
        Chargé d’enseignement, <br/>
        École des Beaux Arts d’Athènes. <br/>
        Yolo
      </p>
    </div>
  </div>
);

AuthorCard.propTypes =
{
  id : React.PropTypes.number,
  name : React.PropTypes.string,
  title : React.PropTypes.string
};

module.exports = AuthorCard;
