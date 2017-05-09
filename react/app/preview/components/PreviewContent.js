import React from 'react';
import PropTypes from 'prop-types';
import browserHistory from 'react-router/lib/browserHistory'
import { connect } from 'react-redux';

import DateStr from '../../shared/components/DateStr';
import {hidePreviewPanel, extendPreviewPanel, hideExtendedPreviewPanel} from '../actions';
import {getArticle} from '../../article/async';
import {getPreview} from '../async';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import PageLoading from '../../shared/components/PageLoading';
import {showMenu} from '../../menu/actions';

class PreviewContent extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount  () {
    this.timeout = null;
  }
  shouldComponentUpdate (nextProps) {
    if (this.props.locale !== nextProps.locale
    && this.props.id !== parseInt(-1)) {
      getPreview(nextProps.id);
    }
    if (((this.props.locale !== nextProps.locale
    || this.props.id !== nextProps.id
    || this.props.isDone !== nextProps.isDone)
    && nextProps.isVisible)
    || this.props.isVisible !== nextProps.isVisible
    || this.props.isExtended !== nextProps.isExtended) {
      return true;
    }
    return false;
  }
  componentWillUnmount  () {
    if (this.timeout) clearTimeout(this.timeout);
  }
  handleClick  () {
    getArticle(this.props.id);
    this.props.extendPreviewPanel();
    this.timeout = setTimeout(() => {
      browserHistory.push('/' + this.props.locale + '/articles/' + this.props.id);
      this.props.hideExtendedPreviewPanel();
    }, 750);
  }
  render  () {
    return (
      <div id="article-preview" className={ (this.props.isVisible ? 'show' : 'hide') + ' ' + (this.props.isExtended ? 'extend' : '') }>
        <PageLoading switches={[this.props.isDone]} />
        <div id="article-preview-content">
          <div className="preview-exit clickable" onClick={this.props.hidePreviewPanel}></div>
          <div className="menu-ham clickable" onClick={this.props.showMenu}></div>
          <LanguageSwitch locale={this.props.locale} />
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
}

Preview.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isExtended: PropTypes.bool.isRequired,
  locale : PropTypes.string.isRequired,
  messages : PropTypes.object.isRequired,
  id : PropTypes.number.isRequired,
  isDone : PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  authorName : PropTypes.string.isRequired,
};

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

module.exports = connect(mapStateToProps, mapDispatchToProps)(PreviewContent);
