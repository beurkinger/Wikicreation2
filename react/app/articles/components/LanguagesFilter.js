import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CheckboxFilter from '../../shared/components/CheckboxFilter';
import {ARTICLE_LANGUAGES} from '../constants';

class LanguagesFilter extends React.Component {
  getCheckbox (language) {
    let isChecked = this.props.filter.indexOf(language.id) !== -1 ? true : false;
    return (
      <CheckboxFilter label={language.name}
                      value={language.id}
                      isChecked={isChecked}
                      handleChange={this.handleCheckboxChange}
                      key={language.id} />
    )
  }
  handleCheckboxChange (languageId) {
    let filter =  this.props.filter.slice(0);
    let index = filter.indexOf(languageId);
    if (index !== -1) {
      filter.splice(index, 1);
    } else {
      filter.push(languageId);
    }
    this.props.handleChange(filter);
  }
  render () {
    return (
      <div className="filters">
        { ARTICLE_LANGUAGES.map(this.getCheckbox) }
      </div>
    )
  }
}

LanguagesFilter.propTypes = {
  filter : PropTypes.array.isRequired,
  handleChange : PropTypes.func.isRequired
};

module.exports = LanguagesFilter;
