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
    this.updateTitlebar(this.props);
  },
  componentWillUpdate : function (nextProps) {
    this.updateTitlebar(nextProps);
  },
  updateTitlebar : function (props) {
    this.props.setTitlebar(props.title);
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
