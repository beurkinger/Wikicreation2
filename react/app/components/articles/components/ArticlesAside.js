import React from 'react';
import {connect} from 'react-redux';

import {filterArticlesTitle, filterArticlesCategory, filterArticlesLanguage} from '../actions';
import {getArticles} from '../async';
import CategoriesFilter from '../../shared/components/CategoriesFilter';
import LanguagesFilter from './LanguagesFilter';
import TextFilter from '../../shared/components/TextFilter';

const ArticlesAside = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired,
    categories : React.PropTypes.array.isRequired,
    languages : React.PropTypes.array.isRequired
   },
  handleTitleFilter : function (str) {
    this.props.filterTitle(str);
    getArticles();
  },
  handleCategoriesFilter : function (categoriesArray) {
    this.props.filterCategory(categoriesArray);
    getArticles();
  },
  handleLanguagesFilter : function (languagesArray) {
    this.props.filterLanguage(languagesArray);
    getArticles();
  },
  render: function () {
    return (
      <aside id="main-aside">
        <TextFilter value={this.props.title} handleChange={this.handleTitleFilter} />
        <div className="info">
          <h2 className="info-title">
            Filtrer par
          </h2>
          <h3 className="filter-name">
            Langages
          </h3>
          <div className="filters">
            <LanguagesFilter handleChange={this.handleLanguagesFilter} />
          </div>
          <h3 className="filter-name">
            Thèmes
          </h3>
          <CategoriesFilter handleChange={this.handleCategoriesFilter} />
        </div>
      </aside>
    )
  }
});

const mapStateToProps = function (store) {
   return {
     title : store.articlesFilter.title,
     categories : store.articlesFilter.categories,
     languages : store.articlesFilter.languages
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    filterTitle : (str) => dispatch(filterArticlesTitle(str)),
    filterCategory : (cat) => dispatch(filterArticlesCategory(cat)),
    filterLanguage : (lan) => dispatch(filterArticlesLanguage(lan)),
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticlesAside);
