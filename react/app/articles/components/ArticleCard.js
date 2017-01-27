import React from 'react';

import Link from 'react-router/lib/Link';

const ArticleCard = props => (
  <li>
    <Link to={ 'articles/' + props.id }>
      {props.title}
    </Link>
  </li>
);

ArticleCard.propTypes =
{
  id : React.PropTypes.number.isRequired,
  title : React.PropTypes.string.isRequired
};

module.exports = ArticleCard;
