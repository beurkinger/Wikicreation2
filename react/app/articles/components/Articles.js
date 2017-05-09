import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getArticles} from '../async';
import {getCategories} from '../../shared/async';
import ArticlesAside from './ArticlesAside';
import ArticlesContent from './ArticlesContent';

class Articles extends React.Component {
  componentWillMount () {
    getArticles();
    getCategories()
    this.updateTitlebar(this.props);
  }
  componentWillUpdate (nextProps) {
    this.updateTitlebar(nextProps);
    if (this.props.locale !== nextProps.locale) {
      getArticles();
    }
  }
  updateTitlebar (props) {
    this.props.setTitlebar(props.title);
  }
  render () {
    return (
      <main id="main-container">
        <ArticlesAside />
        <ArticlesContent />
      </main>
    )
  }
}

Articles.propTypes = {
  locale : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  title : store.messages.strings.articles.main.title,
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar : (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Articles);
