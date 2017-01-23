import React from 'react';
import {connect} from 'react-redux';

import {filterAuthorsName, filterAuthorsCategory} from '../actions';
import {getAuthors} from '../async';
import CategoriesFilter from '../../shared/components/CategoriesFilter';
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
  return (
    <aside id="main-aside">
      <TextFilter value={props.name}
                  handleChange={handleNameFilter}
                  label={props.messages.writeToFilter} />
      <div className="info">
        <h2 className="info-title">
          {props.messages.FilterBy}
        </h2>
        <h3 className="filter-name">
          {props.messages.themes}
        </h3>
        <CategoriesFilter handleChange={handleCategoriesFilter} />
      </div>
    </aside>
  )
};

AuthorsAside.propTypes = {
  messages : React.PropTypes.object.isRequired,
  name : React.PropTypes.string.isRequired,
  categories : React.PropTypes.array.isRequired,
  filterName : React.PropTypes.func.isRequired,
  filterCategory : React.PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  messages : store.messages.strings.filter,
  name : store.authorsFilter.name,
  categories : store.authorsFilter.categories
});

const mapDispatchToProps = (dispatch) => ({
  filterName : (str) => dispatch(filterAuthorsName(str)),
  filterCategory : (cat) => dispatch(filterAuthorsCategory(cat))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthorsAside);
