import React from 'react';

import DateStr from '../../shared/components/DateStr';
import Link from 'react-router/lib/Link'

const AuthorArticle = (props) => (
  <li>
    <h3 className = "article-title">
      <Link to={"articles/" + props.id}>
        { props.title }
      </Link>
    </h3>
    <p className="article-infos">
      {props.categoryName} • <DateStr date={props.date} format="MMMM YYYY" locale="fr" />
    </p>
  </li>
);

AuthorArticle.propTypes = {
  id : React.PropTypes.number.isRequired,
  title : React.PropTypes.string.isRequired,
  date : React.PropTypes.string.isRequired,
  categoryId : React.PropTypes.number.isRequired,
  categoryName : React.PropTypes.string.isRequired
};

module.exports = AuthorArticle;
