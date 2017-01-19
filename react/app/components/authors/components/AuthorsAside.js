import React from 'react';
import {connect} from 'react-redux';

import {filterAuthorsName, filterAuthorsCategory} from '../actions';
import async from '../async';
import CategoriesFilter from '../../shared/components/CategoriesFilter';
import TextFilter from '../../shared/components/TextFilter';

const AuthorsAside = React.createClass({
  propTypes : {
    name : React.PropTypes.string.isRequired,
    categories : React.PropTypes.array.isRequired
   },
   handleNameFilter : function (str) {
     this.props.filterName(str);
   },
   handleCategoriesFilter : function (categoriesArray) {
     this.props.filterCategory(categoriesArray);
   },
  render: function () {
    return (
      <aside id="main-aside">
        <TextFilter value={this.props.name} handleChange={this.handleNameFilter} />
        <div className="info">
          <h2 className="info-title">
            Filtrer par
          </h2>
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
     name : store.authorsFilter.name,
     categories : store.authorsFilter.categories
    };
};

const mapDispatchToProps = function(dispatch) {
  return {
    filterName : (str) => dispatch(filterAuthorsName(str)),
    filterCategory : (cat) => dispatch(filterAuthorsCategory(cat))
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthorsAside);
