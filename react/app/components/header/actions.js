import * as actionTypes from './actionTypes';

export function showTitlebar () {
  return { type: actionTypes.SHOW_TITLEBAR };
};
export function hideTitlebar () {
  return { type: actionTypes.HIDE_TITLEBAR };
};
export function setArticleTitlebar () {
  return {
    type: actionTypes.SET_ARTICLE_TITLEBAR
  };
};
export function setStdTitlebar (title) {
  return {
    type: actionTypes.SET_STD_TITLEBAR,
    title : title ? title : ''
  };
};
export function emptyTitlebar () {
  return { type: actionTypes.EMPTY_TITLEBAR };
};
