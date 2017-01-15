import React from 'react';

import Link from 'react-router/lib/Link'

const AuthorArticle = React.createClass({
  propTypes : {
    id : React.PropTypes.number.isRequired,
    name : React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      <li>
        <Link to={"articles/" + this.props.id}>
          { this.props.name }
        </Link>
      </li>
    )
  }
});

module.exports = AuthorArticle;
