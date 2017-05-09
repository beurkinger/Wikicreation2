import React from 'react';
import PropTypes from 'prop-types';

import DateStr from '../../shared/components/DateStr';
import Link from 'react-router/lib/Link'

const AuthorArticle = (props) => (
  <li>
    <h3 className = "article-title">
      <Link onClick={props.handleClick} to={"/" + props.locale + "/articles/" + props.id}>
        { props.title }
      </Link>
    </h3>
    <p className="article-infos">
      {props.categoryName} • <DateStr date={props.date} format="month-year" locale={props.locale} />
    </p>
  </li>
);

AuthorArticle.propTypes = {
  locale : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  date : PropTypes.string.isRequired,
  categoryId : PropTypes.number.isRequired,
  categoryName : PropTypes.string.isRequired,
  handleClick : PropTypes.func.isRequired
};

module.exports = AuthorArticle;
