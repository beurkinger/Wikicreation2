import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getCategories} from '../../shared/async';
import {getAuthors} from '../async';
import {getAuthor} from '../../author/async';
import AuthorsAside from './AuthorsAside';
import AuthorsContent from './AuthorsContent';
import {showAuthorPanel} from '../../author/actions';

class Authors extends React.Component {
  componentWillMount () {
    getAuthors();
    getCategories();
    this.updateTitlebar(this.props);
    // this.timeout = null;
  }
  componentDidMount  () {
    if (this.props.params && this.props.params.id) {
      getAuthor(parseInt(this.props.params.id), this.props.showAuthorPanel);
      // let props = this.props;
      // this.timeout = setTimeout(function() {
      //   props.showAuthorPanel();
      // }, 500);
    }
  }
  componentWillUpdate (nextProps) {
    this.updateTitlebar(nextProps);
    if (this.props.locale !== nextProps.locale) {
      getAuthors();
    }
  }
  // componentWillUnmount  () {
  //   if (this.timeout) clearTimeout(this.timeout);
  // },
  updateTitlebar (props) {
    this.props.setTitlebar(props.title);
  }
  render () {
    return (
      <main id="main-container">
        <AuthorsAside />
        <AuthorsContent />
      </main>
    )
  }
}

Authors.propTypes = {
  locale : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  isCategoriesDone : PropTypes.bool.isRequired,
  showAuthorPanel : PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  title : store.messages.strings.authors.main.title,
  isCategoriesDone : store.categories.isDone
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str)),
  showAuthorPanel: () => dispatch(showAuthorPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Authors);
