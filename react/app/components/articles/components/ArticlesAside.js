import React from 'react';
import {connect} from 'react-redux';

import {filterArticlesTitle, filterArticlesCategory, filterArticlesLanguage} from '../actions';
import {getArticles} from '../async';
import CategoriesFilter from '../../shared/components/CategoriesFilter';
import LanguagesFilter from './LanguagesFilter';
import TextFilter from '../../shared/components/TextFilter';

const ArticlesAside = (props) => {
  const handleTitleFilter = (str) => {
    props.filterTitle(str);
    getArticles();
  };
  const handleCategoriesFilter = (categoriesArray) => {
    props.filterCategory(categoriesArray);
    getArticles();
  };
  const handleLanguagesFilter = (languagesArray) => {
    props.filterLanguage(languagesArray);
    getArticles();
  };
  return (
    <aside id="main-aside">
      <TextFilter value={props.title}
                  handleChange={handleTitleFilter}
                  label={props.messages.writeToFilter} />
      <div className="info">
        <h2 className="info-title">
          {props.messages.filterBy}
        </h2>
        <h3 className="filter-name">
          {props.messages.languages}
        </h3>
        <div className="filters">
          <LanguagesFilter filter={props.languages} handleChange={handleLanguagesFilter} />
        </div>
        <h3 className="filter-name">
          {props.messages.themes}
        </h3>
        <CategoriesFilter filter={props.categories} handleChange={handleCategoriesFilter} />
      </div>
    </aside>
  )
};

ArticlesAside.propTypes = {
  messages : React.PropTypes.object.isRequired,
  title : React.PropTypes.string.isRequired,
  categories : React.PropTypes.array.isRequired,
  languages : React.PropTypes.array.isRequired
};

const mapStateToProps = (store) => ({
  messages : store.messages.strings.filter,
  title : store.articlesFilter.title,
  categories : store.articlesFilter.categories,
  languages : store.articlesFilter.languages
});

const mapDispatchToProps = (dispatch) => ({
    filterTitle : (str) => dispatch(filterArticlesTitle(str)),
    filterCategory : (cat) => dispatch(filterArticlesCategory(cat)),
    filterLanguage : (lan) => dispatch(filterArticlesLanguage(lan)),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticlesAside);
