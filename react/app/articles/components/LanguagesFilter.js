import React from 'react';
import {connect} from 'react-redux';

import CheckboxFilter from '../../shared/components/CheckboxFilter';
import {ARTICLE_LANGUAGES} from '../constants';

const LanguagesFilter = React.createClass({
  propTypes: {
    filter : React.PropTypes.array.isRequired,
    handleChange : React.PropTypes.func.isRequired
  },
  getCheckbox : function (language) {
    let isChecked = this.props.filter.indexOf(language.id) !== -1 ? true : false;
    return (
      <CheckboxFilter label={language.name}
                      value={language.id}
                      isChecked={isChecked}
                      handleChange={this.handleCheckboxChange}
                      key={language.id} />
    )
  },
  handleCheckboxChange : function (languageId)
  {
    let filter =  this.props.filter.slice(0);
    let index = filter.indexOf(languageId);
    if (index !== -1) {
      filter.splice(index, 1);
    } else {
      filter.push(languageId);
    }
    this.props.handleChange(filter);
  },
  render: function () {
    return (
      <div className="filters">
        { ARTICLE_LANGUAGES.map(this.getCheckbox) }
      </div>
    )
  }
});

module.exports = LanguagesFilter;
