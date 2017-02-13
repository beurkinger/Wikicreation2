import React from 'react';
import {connect} from 'react-redux';

import DateStr from '../../shared/components/DateStr';
import Link from 'react-router/lib/Link'

const AuthorArticle = (props) => (
  <li>
    <h3 className = "article-title">
      <Link onClick={props.handleClick} to={"/articles/" + props.id}>
        { props.title }
      </Link>
    </h3>
    <p className="article-infos">
      {props.categoryName} • <DateStr date={props.date} format="month-year" locale={props.locale} />
    </p>
  </li>
);

AuthorArticle.propTypes = {
  locale : React.PropTypes.string.isRequired,
  id : React.PropTypes.number.isRequired,
  title : React.PropTypes.string.isRequired,
  date : React.PropTypes.string.isRequired,
  categoryId : React.PropTypes.number.isRequired,
  categoryName : React.PropTypes.string.isRequired,
  handleClick : React.PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

module.exports = connect(mapStateToProps)(AuthorArticle);
