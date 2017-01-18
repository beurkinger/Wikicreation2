import React from 'react';

import DateStr from '../../shared/components/DateStr';
import Link from 'react-router/lib/Link'

const AuthorArticle = React.createClass({
  propTypes : {
    id : React.PropTypes.number.isRequired,
    title : React.PropTypes.string.isRequired,
    date : React.PropTypes.string.isRequired,
    categoryId : React.PropTypes.number.isRequired,
    categoryName : React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <li>
        <h3 className = "article-title">
          <Link to={"articles/" + this.props.id}>
            { this.props.title }
          </Link>
        </h3>
        <p className="article-infos">
          {this.props.categoryName} • <DateStr date={this.props.date} format="MMMM YYYY" locale="fr" />
        </p>
      </li>
    )
  }
});

module.exports = AuthorArticle;
