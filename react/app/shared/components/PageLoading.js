import React from 'react';
import PropTypes from 'prop-types';

const PageLoading = props => {
  const testSwitches = () => {
    if (props.switches.indexOf(false) === -1) return false;
    return true;
  };

  if (!testSwitches()) return null;

  return (
    <div className="page-loading">
      <div className='spinner'></div>
    </div>
  )
};

PageLoading.propTypes = {
  switches : PropTypes.array.isRequired
}

module.exports = PageLoading;
