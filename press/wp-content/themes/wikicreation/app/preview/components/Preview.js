import React from 'react';
import browserHistory from 'react-router/lib/browserHistory'
import { connect } from 'react-redux';

import DateStr from '../../shared/components/DateStr';
import {hidePreviewPanel, extendPreviewPanel, hideExtendedPreviewPanel} from '../actions';
import {getArticle} from '../../article/async';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import PageLoading from '../../shared/components/PageLoading';
import {showMenu} from '../../menu/actions';

const Preview = (props) => {
  const handleClick = () => {
    getArticle(1);
    props.extendPreviewPanel();
    setTimeout(() => {
      browserHistory.push('/articles/1');
      props.hideExtendedPreviewPanel();
    }, 500);
  };
  return (
    <div id="article-preview" className={ (props.isVisible ? 'show' : 'hide') + ' ' + (props.isExtended ? 'extend' : '') }>
      <PageLoading switches={[props.isDone]} />
      <div id="article-preview-content">
        <div className="preview-exit clickable" onClick={props.hidePreviewPanel}></div>
        <div className="menu-ham clickable" onClick={props.showMenu}></div>
        <LanguageSwitch />
        <h5 className="article-infos">
          { props.categoryName } • <DateStr date={props.date} format="month-year" locale={props.locale} />
        </h5>
        <h3 className="article-title">{ props.title }</h3>
        <h4 className="article-author">{ props.authorName }</h4>
        <div className="separator"></div>
        <p className="article-desc">{ props.desc }</p>
        <div className="btn article-link" onClick={handleClick} >
          {props.messages.readArticle}
        </div>
      </div>
    </div>
  )
};

// <Link className="article-link"
//       to={"/articles/" + props.id} >
//   {props.messages.readArticle}
// </Link>

Preview.propTypes = {
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Preview);
