import React from 'react';

const ArticleCategory = props => (
  <div className="theme">
    <h2 className="theme-title">
      Communication
    </h2>
    <ul className="theme-articles">
      <li>
        Découverte et création
      </li>
      <li>
        Virtual et création
      </li>
      <li>
        Duchamp et création
      </li>
      <li>
        Découverte et création
      </li>
      <li>
        Virtual et création
      </li>
      <li>
        Duchamp et création
      </li>
      <li>
        Virtual et création
      </li>
      <li>
        Duchamp et création
      </li>
      <li>
        Découverte et création
      </li>
      <li>
        Virtual et création
      </li>
      <li>
        Duchamp et création
      </li>
    </ul>
  </div>
);

ArticleCategory.propTypes =
{
  id : React.PropTypes.number,
  name : React.PropTypes.string
};

module.exports = ArticleCategory;
