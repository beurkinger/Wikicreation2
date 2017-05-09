import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CheckboxFilter from '../../shared/components/CheckboxFilter';

class CategoriesFilter extends React.Component {
  constructor (props) {
    super(props);
    this.getCheckbox = this.getCheckbox.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  getCheckbox (category) {
    let isChecked = this.props.filter.indexOf(category.id) !== -1 ? true : false;
    return (
      <CheckboxFilter label={category.name}
                      value={category.id}
                      isChecked={isChecked}
                      handleChange={this.handleCheckboxChange}
                      key={category.id} />
    )
  }
  handleCheckboxChange (categoryId) {
    let filter =  this.props.filter.slice(0);
    let index = filter.indexOf(categoryId);
    if (index !== -1) {
      filter.splice(index, 1);
    } else {
      filter.push(categoryId);
    }
    this.props.handleChange(filter);
  }
  render () {
    return (
      <div className="filters">
        { this.props.categories.map(this.getCheckbox) }
      </div>
    )
  }
}

CategoriesFilter.propTypes = {
  categories : PropTypes.array.isRequired,
  filter : PropTypes.array.isRequired,
  handleChange : PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
     categories: store.categories.list,
});

module.exports = connect(mapStateToProps)(CategoriesFilter);
