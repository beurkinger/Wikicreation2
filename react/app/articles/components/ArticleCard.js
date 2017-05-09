import React from 'react';
import PropTypes from 'prop-types';
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
  handleClick :  PropTypes.func.isRequired,
  id : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired
};

module.exports = ArticleCard;
