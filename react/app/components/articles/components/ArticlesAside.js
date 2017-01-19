import React from 'react';
import {connect} from 'react-redux';

import CategoriesFilter from '../../shared/components/CategoriesFilter';
import LanguagesFilter from './LanguagesFilter';
import TextFilter from '../../shared/components/TextFilter';

const ArticlesAside = React.createClass({
  getInitialState : () => ({
    title : '',
    categories : [],
    languages : []
   }),
  handleTitleFilter : function (str) {
    this.setState({ title : str });
  },
  handleCategoriesFilter : function (categoriesArray) {
    this.setState({categories : categoriesArray});
  },
  handleLanguagesFilter : function (languagesArray) {
    this.setState({languages : languagesArray});
  },
  render: function () {
    return (
      <aside id="main-aside">
        <TextFilter value={this.state.title} handleChange={this.handleTitleFilter} />
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

module.exports = connect()(ArticlesAside);
