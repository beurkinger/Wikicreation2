import React from 'react';
import PropTypes from 'prop-types';

//Liste des différents de format de date que le component accepte en props
const FORMAT_FULL = 'full'; // ex : "01 janvier 2017"
const FORMAT_MONTH_YEAR = 'month-year'; // ex : "janvier 2017"
const FORMAT_COMPACT = 'compact'; // ex : "01/01/17"

const LOCALE_FR = 'fr';
const LOCALE_EN = 'en';

const EN_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

const FR_MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
  'aout', 'septembre', 'octobre', 'novembre', 'décembre'
];

const DateStr = (props) => {

  const addMissingZero = (number) => {
    if (parseInt(number) < 10) number = '0' + String(number);
    return String(number);
  };

  const getMonthName = (month, locale) => {
    month = parseInt(month);
    if (props.locale === LOCALE_EN) return EN_MONTHS[month];
    return FR_MONTHS[month];
  };

  const shortenYear = (year) => {
    year = String(year);
    return year.slice(2);
  };

  const formatDate = () => {
    if (!props.date || props.date === '') return '';

    let date = new Date(props.date);

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    switch (props.format) {
      case FORMAT_MONTH_YEAR:
        return getMonthName(month) + ' ' + year;
      case FORMAT_COMPACT :
        return addMissingZero(day) + '/' + addMissingZero(month) + '/' + shortenYear(year);
      case FORMAT_FULL:
      default :
        return addMissingZero(day) + ' ' + getMonthName(month) + ' ' + year;
    }
  };

  return <span>{formatDate()}</span>
};

DateStr.defaultProps = {
  format : FORMAT_COMPACT,
  locale : LOCALE_FR
};

DateStr.propTypes = {
  date: PropTypes.string.isRequired,
  format: PropTypes.string,
  locale: PropTypes.string
};

module.exports = DateStr;
