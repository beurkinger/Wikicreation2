import React from 'react';
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
  editorial : React.PropTypes.string.isRequired,
  reading : React.PropTypes.string.isRequired,
  scientific : React.PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  editorial : store.messages.strings.committee.aside.editorial,
  reading : store.messages.strings.committee.aside.reading,
  scientific : store.messages.strings.committee.aside.scientific
});

module.exports = connect(mapStateToProps)(CommitteesAside);
