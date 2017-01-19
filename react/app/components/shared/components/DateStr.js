import React from 'react';
import moment from 'moment';

const DateStr = (props) => {
  const formatDate = () => {
    if (!props.date || props.date === '') return '';
    let date = moment(props.date);
    if (props.locale) date.locale('fr');
    let format = props.format ? props.format : null;
    let string = date.format(format)
    return string;
  };

  return <span>{formatDate()}</span>
};

DateStr.propTypes = {
  date: React.PropTypes.string.isRequired,
  format: React.PropTypes.string,
  locale: React.PropTypes.string
};

module.exports = DateStr;
