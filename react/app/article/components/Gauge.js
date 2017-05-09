import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Gauge = (props) => (
  <div className="gauge"><div className="percent" style={{'width' : props.percentRead + '%'}}></div></div>
);

Gauge.propTypes = {
  percentRead : PropTypes.number.isRequired
};

const mapStateToProps = (store) => ({
  percentRead : store.read
});

module.exports = connect(mapStateToProps, null)(Gauge);
