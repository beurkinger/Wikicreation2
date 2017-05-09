import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import CommitteesAside from './CommitteesAside';
import CommitteesContent from './CommitteesContent';

class Committees extends React.Component {
  componentWillMount () {
    this.updateTitlebar(this.props);
  }
  componentWillUpdate (nextProps) {
    this.updateTitlebar(nextProps);
  }
  updateTitlebar (props) {
    this.props.setTitlebar(props.title);
  }
  render () {
    return (
      <main id="main-container">
        <CommitteesAside />
        <CommitteesContent />
      </main>
    )
  }
}

Committees.propTypes = {
  title : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  title : store.messages.strings.committee.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Committees);
