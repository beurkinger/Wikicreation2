import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PAGE_TYPE_STD, PAGE_TYPE_ARTICLE } from '../constants';
import ArticleTitle from './ArticleTitle';
import StandardTitle from './StandardTitle';


const Titlebar = (props) => {
  const getContent = () => {
    if (props.pageType === PAGE_TYPE_STD) {
      return <StandardTitle title={props.title} />
    }
    else if (props.pageType === PAGE_TYPE_ARTICLE) {
      return <ArticleTitle/>
    }
  };
  return (
    <div id="main-title-container" style={{'display' : props.isVisible ? 'block' : 'none'}}>
      {getContent()}
    </div>
  );
};

Titlebar.propTypes = {
  isVisible : PropTypes.bool.isRequired,
  pageType : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  isVisible : store.titlebar.isVisible,
  pageType : store.titlebar.pageType,
  title : store.titlebar.title,
});

module.exports = connect(mapStateToProps)(Titlebar);
