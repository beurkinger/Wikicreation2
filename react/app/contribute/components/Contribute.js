import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {setStdTitlebar} from '../../header/actions';
import ContributeAside from './ContributeAside';
import ContributeContent from './ContributeContent';

class Contribute extends React.Component {
  componentWillMount () {
    this.props.setTitlebar(this.props.title);
  }
  componentWillUpdate (nextProps) {
    this.props.setTitlebar(nextProps.title);
  }
  render () {
    return (
      <main id="main-container">
        <ContributeAside />
        <ContributeContent />
      </main>
    )
  }
}

Contribute.propTypes = {
  title : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  title : store.messages.strings.contribute.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Contribute);
