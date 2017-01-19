import React from 'react';
import {connect} from 'react-redux';

import CheckboxFilter from '../../shared/components/CheckboxFilter';
import {ARTICLE_LANGUAGES} from '../constants';

const LanguagesFilter = React.createClass({
  propTypes: {
    handleChange : React.PropTypes.func.isRequired
  },
  getInitialState : () => ({
    filter : new Set()
  }),
  getCheckbox : function (language) {
    return (
      <CheckboxFilter label={language.name}
                      value={language.id}
                      handleChange={this.handleCheckboxChange}
                      key={language.id} />
    )
  },
  handleCheckboxChange : function (languageId)
  {
    let filter = this.state.filter;
    if (filter.has(languageId)) {
      filter.delete(languageId);
    } else {
      filter.add(languageId);
    }
    this.props.handleChange(Array.from(filter));
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
