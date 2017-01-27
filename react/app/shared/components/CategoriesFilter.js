import React from 'react';
import {connect} from 'react-redux';

import {getCategories} from '../../shared/async';
import CheckboxFilter from '../../shared/components/CheckboxFilter';

const CategoriesFilter = React.createClass({
  propTypes: {
    categories : React.PropTypes.array.isRequired,
    filter : React.PropTypes.array.isRequired,
    handleChange : React.PropTypes.func.isRequired
  },
  componentWillMount : () => {
    getCategories()
  },
  getCheckbox : function (category) {
    let isChecked = this.props.filter.indexOf(category.id) !== -1 ? true : false;
    return (
      <CheckboxFilter label={category.name}
                      value={category.id}
                      isChecked={isChecked}
                      handleChange={this.handleCheckboxChange}
                      key={category.id} />
    )
  },
  handleCheckboxChange : function (categoryId)
  {
    let filter =  this.props.filter.slice(0);
    let index = filter.indexOf(categoryId);
    if (index !== -1) {
      filter.splice(index, 1);
    } else {
      filter.push(categoryId);
    }
    this.props.handleChange(filter);
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
     categories: store.categories.list,
});

module.exports = connect(mapStateToProps)(CategoriesFilter);
