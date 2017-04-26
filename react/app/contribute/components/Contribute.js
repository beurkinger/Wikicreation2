import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {setStdTitlebar} from '../../header/actions';
import ContributeAside from './ContributeAside';
import ContributeContent from './ContributeContent';


const Contribute = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    this.props.setTitlebar(this.props.title);
  },
  componentWillUpdate : function (nextProps) {
    this.props.setTitlebar(nextProps.title);
  },
  render : function () {
    return (
      <main id="main-container">
        <ContributeAside />
        <ContributeContent />
      </main>
    )
  }
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.contribute.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Contribute);
