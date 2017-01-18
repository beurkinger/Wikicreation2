import * as actionTypes from './actionTypes';
import {PAGE_TYPE_ARTICLE, PAGE_TYPE_STD} from './constants';

const initTitlebar = {
  isVisible : false,
  pageType : '',
  title : ''
};
const titlebarReducer = function(state = initTitlebar, action) {
  switch (action.type) {
    case actionTypes.SHOW_TITLEBAR :
      return Object.assign({}, state, { isVisible : true });
    case actionTypes.HIDE_TITLEBAR :
      return Object.assign({}, state, { isVisible : false });
    case actionTypes.SET_ARTICLE_TITLEBAR :
      return Object.assign({}, state, {
        isVisible : false,
        pageType : PAGE_TYPE_ARTICLE,
        title : ''
      });
    case actionTypes.SET_STD_TITLEBAR :
      return Object.assign({}, state, {
        isVisible : true,
        pageType : PAGE_TYPE_STD,
        title : action.title
      });
    case actionTypes.EMPTY_TITLEBAR :
      return Object.assign({}, state, {
        isVisible : false,
        pageType : PAGE_TYPE_STD,
        title : 'Wikicreation'
       });
    default:
      return state;
  }
};

module.exports = {
  titlebar : titlebarReducer
};
