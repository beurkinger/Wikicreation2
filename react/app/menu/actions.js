import * as actionTypes from './actionTypes';

export function showMenu () {
  return { type: actionTypes.SHOW_MENU };
};
export function hideMenu () {
  return { type: actionTypes.HIDE_MENU };
};

export function newsRequest () {
  return { type: actionTypes.NEWS_REQUEST };
};
export function newsSuccess (json) {
  return {
    type: actionTypes.NEWS_SUCCESS,
    language : json.language,
    list : json.list
  };
};
export function newsFail (msg) {
  console.warn('Problem while retrieving news : "' + msg + '"');
  return { type: actionTypes.NEWS_FAIL };
};
