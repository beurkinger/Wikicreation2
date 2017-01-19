import React from 'react';
import {connect} from 'react-redux';

import {getCategories} from '../../shared/async';
import {ARTICLE_LANGUAGES} from '../constants';
import CheckboxFilter from '../../shared/components/CheckboxFilter';
import TextFilter from '../../shared/components/TextFilter';

const ArticlesAside = React.createClass({
  propTypes: {
    categories : React.PropTypes.array.isRequired
  },
  getInitialState : () => ({
    filters : {
      title : '',
      categories : {}
    }
  }),
  componentWillMount : () => getCategories(),
  getCheckbox : function (category) {
    return (
      <CheckboxFilter label={category.name}
                    handleChange={this.test}
                    key={category.id} />
    )
  },
  test : () => console.log('yala'),
  render: function () {
    return (
      <aside id="main-aside">
        <TextFilter value={this.state.filters.title} handleChange={this.test} />
        <div className="info">
          <h2 className="info-title">
            Filtrer par
          </h2>
          <h3 className="filter-name">
            Langages
          </h3>
          <div className="filters">
            { ARTICLE_LANGUAGES.map(this.getCheckbox) }
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

const mapStateToProps = (store) => ({
     categories: store.categories.list
});

module.exports = connect(mapStateToProps)(ArticlesAside);
