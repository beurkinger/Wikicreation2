import React from 'react';
import browserHistory from 'react-router/lib/browserHistory'
import { connect } from 'react-redux';

import DateStr from '../../shared/components/DateStr';
import {extendPreviewPanel} from '../actions';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import {showMenu} from '../../menu/actions';



const Preview = (props) => {
  const handleClick = () => {
    props.extendPreviewPanel();
    setTimeout(() => browserHistory.push('/articles/1'), 500);
  };
  return (
    <div id="article-preview" className={ (props.isVisible ? 'show' : 'hide') + ' ' + (props.isExtended ? 'extend' : '') }>
      <div id="article-preview-content">
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
  title: store.preview.title,
  date: store.preview.date,
  desc: store.preview.desc,
  categoryName : store.preview.categoryName,
  authorName : store.author.name,
});

const mapDispatchToProps = (dispatch) => ({
    extendPreviewPanel : () => dispatch(extendPreviewPanel()),
    showMenu: () => dispatch(showMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Preview);
