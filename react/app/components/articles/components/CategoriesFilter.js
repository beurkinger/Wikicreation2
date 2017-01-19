import React from 'react';
import {connect} from 'react-redux';

import {getCategories} from '../../shared/async';
import CheckboxFilter from '../../shared/components/CheckboxFilter';

const CategoriesFilter = React.createClass({
  propTypes: {
    categories : React.PropTypes.array.isRequired,
    handleChange : React.PropTypes.func.isRequired
  },
  getInitialState : () => ({
    filter : new Set()
  }),
  componentWillMount : function () {
    getCategories()
  },
  getCheckbox : function (category) {
    return (
      <CheckboxFilter label={category.name}
                      value={category.id}
                      handleChange={this.handleCheckboxChange}
                      key={category.id} />
    )
  },
  handleCheckboxChange : function (categoryId)
  {
    let filter = this.state.filter;
    if (filter.has(categoryId)) {
      filter.delete(categoryId);
    } else {
      filter.add(categoryId);
    }
    this.props.handleChange(Array.from(filter));
  },
  render: function () {
    return (
      <div className="filters">
        { this.props.categories.map(this.getCheckbox) }
      </div>
    )
  }
});

const mapStateToProps = (store) => ({
     categories: store.categories.list
});

module.exports = connect(mapStateToProps)(CategoriesFilter);
