import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getAuthors} from '../async';
import AuthorsAside from './AuthorsAside';
import AuthorsContent from './AuthorsContent';

const Authors = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    getAuthors();
    this.updateTitlebar(this.props);
  },
  componentWillUpdate : function (nextProps) {
    this.updateTitlebar(nextProps);
  },
  updateTitlebar : function (props) {
    this.props.setTitlebar(props.title);
  },
  render: function () {
    return (
      <main id="main-container">
        <AuthorsAside />
        <AuthorsContent />
      </main>
    )
  }
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.authors.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Authors);
