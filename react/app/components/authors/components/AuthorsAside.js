import React from 'react';
import {connect} from 'react-redux';

import CategoriesFilter from '../../shared/components/CategoriesFilter';
import TextFilter from '../../shared/components/TextFilter';

const AuthorsAside = React.createClass({
  getInitialState : () => ({
    name : '',
    categories : []
   }),
   handleNameFilter : function (str) {
     this.setState({ name : str });
   },
   handleCategoriesFilter : function (categoriesArray) {
     this.setState({categories : categoriesArray});
   },
  render: function () {
    return (
      <aside id="main-aside">
        <TextFilter value={this.state.name} handleChange={this.handleNameFilter} />
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

const mapDispatchToProps = function(dispatch) {
  return {
  }
};

module.exports = connect(mapDispatchToProps)(AuthorsAside);
