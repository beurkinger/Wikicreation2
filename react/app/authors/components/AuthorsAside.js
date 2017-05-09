import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {emptyAuthorsFilter, filterAuthorsName, filterAuthorsCategory} from '../actions';
import {getAuthors} from '../async';
import CategoriesFilter from '../../shared/components/CategoriesFilter';
import FilterReset from '../../shared/components/FilterReset';
import PageLoading from '../../shared/components/PageLoading';
import TextFilter from '../../shared/components/TextFilter';

const AuthorsAside =(props) => {
  const handleNameFilter = (str) => {
    props.filterName(str);
    getAuthors();
  };
  const handleCategoriesFilter = (categoriesArray) => {
    props.filterCategory(categoriesArray);
    getAuthors();
  };
  const resetFilter = () => {
    props.emptyFilter();
    getAuthors();
  };
  return (
    <aside id="main-aside">
      <PageLoading switches={[props.isCategoriesDone]} />
      <TextFilter value={props.name}
                  handleChange={handleNameFilter}
                  label={props.messages.writeToFilter} />
      <div className="info">
        <h2 className="info-title">
          {props.messages.filterBy}
        </h2>
        <h3 className="filter-name">
          {props.messages.themes}
        </h3>
        <CategoriesFilter filter={props.categories} handleChange={handleCategoriesFilter} />
        <FilterReset message={props.messages.resetFilter} handleClick={resetFilter}/>
      </div>
    </aside>
  )
};

AuthorsAside.propTypes = {
  messages : PropTypes.object.isRequired,
  categories : PropTypes.array.isRequired,
  isCategoriesDone : PropTypes.bool.isRequired,
  name : PropTypes.string.isRequired,
  filterName : PropTypes.func.isRequired,
  filterCategory : PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  messages : store.messages.strings.filter,
  name : store.authorsFilter.name,
  categories : store.authorsFilter.categories,
  isCategoriesDone : store.categories.isDone
});

const mapDispatchToProps = (dispatch) => ({
  filterName : (str) => dispatch(filterAuthorsName(str)),
  filterCategory : (cat) => dispatch(filterAuthorsCategory(cat)),
  emptyFilter : () => dispatch(emptyAuthorsFilter())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthorsAside);
