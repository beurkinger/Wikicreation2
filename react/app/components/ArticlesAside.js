import React from 'react';
import {connect} from 'react-redux';

import {getCategories} from './async';
import CheckboxFilter from './CheckboxFilter';
import TextFilter from './TextFilter';

const ArticlesAside = React.createClass({
  propTypes: {
    categories : React.PropTypes.array.isRequired,
    languages : React.PropTypes.array.isRequired
  },
  componentWillMount : () => getCategories(),
  getCheckbox : function (category) {
    return <CheckboxFilter label={category.name} handleChange={this.test} key={category.id} />
  },
  test : () => console.log('yala'),
  render: function () {
    return (
      <aside id="main-aside">
        <TextFilter handleChange={this.test} />
        <div className="info">
          <h2 className="info-title">
            Filtrer par
          </h2>
          <h3 className="filter-name">
            Langages
          </h3>
          <div className="filters">
            { this.props.languages.map(this.getCheckbox) }
          </div>
          <h3 className="filter-name">
            Thèmes
          </h3>
          <div className="filters">
            { this.props.categories.map(this.getCheckbox) }
          </div>
        </div>
      </aside>
    )
  }
});

const mapStateToProps = function (store) {
   return {
     categories: store.categories.list,
     languages : store.articleLanguages
   };
};

module.exports = connect(mapStateToProps)(ArticlesAside);
