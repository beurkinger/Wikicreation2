import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const CommitteesAside = (props) => {
  return (
    <aside id="main-aside">
      <a className="nav-link"  href="#editorial">
        {props.editorial}
      </a>
      <a className="nav-link" href="#reading">
        {props.reading}
      </a>
      <a className="nav-link" href="#scientific">
        {props.scientific}
      </a>
    </aside>
  )
};

CommitteesAside.propTypes = {
  editorial : PropTypes.string.isRequired,
  reading : PropTypes.string.isRequired,
  scientific : PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  editorial : store.messages.strings.committee.aside.editorial,
  reading : store.messages.strings.committee.aside.reading,
  scientific : store.messages.strings.committee.aside.scientific
});

module.exports = connect(mapStateToProps)(CommitteesAside);
