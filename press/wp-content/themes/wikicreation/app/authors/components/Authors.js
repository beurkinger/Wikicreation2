import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getCategories} from '../../shared/async';
import {getAuthors} from '../async';
import {getAuthor} from '../../author/async';
import AuthorsAside from './AuthorsAside';
import AuthorsContent from './AuthorsContent';
import {showAuthorPanel} from '../../author/actions';

const Authors = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired,
    isCategoriesDone : React.PropTypes.bool.isRequired,
    showAuthorPanel : React.PropTypes.func.isRequired
  },
  componentWillMount : function () {
    getAuthors();
    getCategories();
    this.updateTitlebar(this.props);
    this.timeout = null;
  },
  componentDidMount : function () {
    if (this.props.params && this.props.params.id) {
      getAuthor(parseInt(this.props.params.id));
      let props = this.props;
      this.timeout = setTimeout(function() {
        props.showAuthorPanel();
      }, 500);
    }
  },
  componentWillUpdate : function (nextProps) {
    this.updateTitlebar(nextProps);
  },
  componentWillUnmount : function () {
    if (this.timeout) clearTimeout(this.timeout);
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
  title : store.messages.strings.authors.main.title,
  isCategoriesDone : store.categories.isDone
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str)),
  showAuthorPanel: () => dispatch(showAuthorPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Authors);
