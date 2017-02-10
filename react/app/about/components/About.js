import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import AboutAside from './AboutAside';
import AboutContent from './AboutContent';

const About = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    this.props.setTitlebar(this.props.title);
  },
  componentWillUpdate : function (nextProps) {
    this.props.setTitlebar(nextProps.title);
  },
  render: () => (
    <main id="main-container">
      <AboutAside />
      <AboutContent />
    </main>
  )
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.about.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(About);
