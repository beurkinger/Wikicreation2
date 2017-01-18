import React from 'react';
import moment from 'moment';

const DateStr = React.createClass({
  propTypes: {
    date: React.PropTypes.string.isRequired,
    format: React.PropTypes.string,
    locale: React.PropTypes.string
  },
  formatDate : function() {
    if (!this.props.date || this.props.date === '') return '';
    let date = moment(this.props.date);
    if (this.props.locale) date.locale('fr');
    let format = this.props.format ? this.props.format : null;
    let string = date.format(format)
    return string;
  },
  render: function () {
    return (
      <span>{this.formatDate()}</span>
    );
  }
});

module.exports = DateStr;
