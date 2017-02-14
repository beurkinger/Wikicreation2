import React from 'react';

import Link from 'react-router/lib/Link';

const ArticleCard = props => {
  const handleClick = () => {
    props.handleClick(props.id)
  };

  return (
    <li>
      <span onClick={handleClick}>
        {props.title}
      </span>
    </li>
  )
};

ArticleCard.propTypes =
{
  handleClick :  React.PropTypes.func.isRequired,
  id : React.PropTypes.number.isRequired,
  title : React.PropTypes.string.isRequired
};

module.exports = ArticleCard;
