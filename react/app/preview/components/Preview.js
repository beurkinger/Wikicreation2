import React from 'react';
import browserHistory from 'react-router/lib/browserHistory'
import { connect } from 'react-redux';

import DateStr from '../../shared/components/DateStr';
import {hidePreviewPanel, extendPreviewPanel, hideExtendedPreviewPanel} from '../actions';
import {getArticle} from '../../article/async';
import {getPreview} from '../async';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import PageLoading from '../../shared/components/PageLoading';
import {showMenu} from '../../menu/actions';

const Preview = React.createClass({
  propTypes : {
    isVisible: React.PropTypes.bool.isRequired,
    isExtended: React.PropTypes.bool.isRequired,
    locale : React.PropTypes.string.isRequired,
    messages : React.PropTypes.object.isRequired,
    id : React.PropTypes.number.isRequired,
    isDone : React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    categoryName: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    authorName : React.PropTypes.string.isRequired,
  },
  componentWillMount : function () {
    this.timeout = null;
  },
  componentWillUpdate : function (nextProps) {
    if (this.props.locale !== nextProps.locale && this.props.id !== parseInt(-1)) {
      getPreview(nextProps.id);
    }
  },
  componentWillUnmount : function () {
    if (this.timeout) clearTimeout(this.timeout);
  },
  handleClick : function () {
    getArticle(this.props.id);
    this.props.extendPreviewPanel();
    this.timeout = setTimeout(() => {
      browserHistory.push('/' + this.props.locale + '/articles/' + this.props.id);
      this.props.hideExtendedPreviewPanel();
    }, 750);
  },
  render : function () {
    return (
      <div id="article-preview" className={ (this.props.isVisible ? 'show' : 'hide') + ' ' + (this.props.isExtended ? 'extend' : '') }>
        <PageLoading switches={[this.props.isDone]} />
        <div id="article-preview-content">
          <div className="preview-exit clickable" onClick={this.props.hidePreviewPanel}></div>
          <div className="menu-ham clickable" onClick={this.props.showMenu}></div>
          <LanguageSwitch />
          <h5 className="article-infos">
            { this.props.categoryName } • <DateStr date={this.props.date} format="month-year" locale={this.props.locale} />
          </h5>
          <h3 className="article-title">{ this.props.title }</h3>
          <h4 className="article-author">{ this.props.authorName }</h4>
          <div className="separator"></div>
          <p className="article-desc">{ this.props.desc }</p>
          <div className="btn article-link" onClick={this.handleClick} >
            {this.props.messages.readArticle}
          </div>
        </div>
      </div>
    )
  }
});

const mapStateToProps = (store) => ({
  isVisible : store.previewPanel.isVisible,
  isExtended : store.previewPanel.isExtended,
  locale : store.messages.locale,
  messages : store.messages.strings.preview,
  id : store.preview.id,
  isDone : store.preview.isDone,
  title: store.preview.title,
  date: store.preview.date,
  desc: store.preview.desc,
  categoryName : store.preview.categoryName,
  authorName : store.preview.authorName
});

const mapDispatchToProps = (dispatch) => ({
    extendPreviewPanel : () => dispatch(extendPreviewPanel()),
    hidePreviewPanel : () => dispatch(hidePreviewPanel()),
    hideExtendedPreviewPanel : () => dispatch(hideExtendedPreviewPanel()),
    showMenu: () => dispatch(showMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Preview);
