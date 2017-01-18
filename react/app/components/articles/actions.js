import * as actionTypes from './actionTypes';

export function articlesRequest () {
  return { type: actionTypes.ARTICLES_REQUEST };
};
export function articlesSuccess (json) {
  return {
    type: actionTypes.ARTICLES_SUCCESS,
    list : json
 };
};
export function articlesFail (msg) {
  console.warn('Problem while retrieving articles : "' + msg + '"');
  return { type: actionTypes.ARTICLES_FAIL };
};
