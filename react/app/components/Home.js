import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';

const Home = React.createClass({
  componentWillMount : function () {
    this.props.emptyTitlebar();
  },
  render : () => <main id="main-container"></main>
});

const mapDispatchToProps = function (dispatch) {
  return {
    emptyTitlebar: () => dispatch(actions.emptyTitlebar())
  }
};

module.exports = connect(null, mapDispatchToProps)(Home);
