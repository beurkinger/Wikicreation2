import React from 'react';

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
  switches : React.PropTypes.array.isRequired
}

module.exports = PageLoading;
