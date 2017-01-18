import React from 'react';
import {connect} from 'react-redux';

import {getCategories} from '../../shared/async';
import CheckboxFilter from '../../shared/components/CheckboxFilter';
import TextFilter from '../../shared/components/TextFilter';

const AuthorsAside = React.createClass({
  propTypes : { categories : React.PropTypes.array.isRequired },
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
     categories: store.categories.list
   }
};

const mapDispatchToProps = function(dispatch) {
  return {
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthorsAside);
