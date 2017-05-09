import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import AboutAside from './AboutAside';
import AboutContent from './AboutContent';

class About extends React.Component {
  componentWillMount () {
    this.props.setTitlebar(this.props.title);
  }

  componentWillUpdate (nextProps) {
    this.props.setTitlebar(nextProps.title);
  }

  render () {
    return (
      <main id="main-container">
        <AboutAside />
        <AboutContent />
      </main>
    )
  }
};

About.PropTypes = {
  title : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  title : store.messages.strings.about.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(About);
