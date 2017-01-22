import React from 'react';
import {connect} from 'react-redux';

import {emptyTitlebar} from '../../header/actions';

const Home = React.createClass({
  componentWillMount : function () {
    this.props.emptyTitlebar();
  },
  render : () => <main id="main-container"></main>
});

const mapDispatchToProps = (dispatch) => ({
  emptyTitlebar: () => dispatch(emptyTitlebar())
});

module.exports = connect(null, mapDispatchToProps)(Home);
