import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DateStr from '../../shared/components/DateStr';

const ArticleTitle = (props) => (
  <div>
    <h5 className="article-infos">
      {props.categoryName} • <DateStr date={props.date} format="month-year" locale={props.locale} />
      </h5>
    <h1 className="article-title">{props.articleTitle}</h1>
  </div>
);

ArticleTitle.propTypes = {
  locale : PropTypes.string.isRequired,
  categoryName : PropTypes.string.isRequired,
  date : PropTypes.string.isRequired,
  categoryName : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  articleTitle : store.article.title,
  date: store.article.date,
  categoryName : store.article.categoryName,
});

module.exports = connect(mapStateToProps)(ArticleTitle);
