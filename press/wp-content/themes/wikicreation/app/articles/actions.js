import * as actionTypes from './actionTypes';

export function articlesRequest () {
  return { type: actionTypes.ARTICLES_REQUEST };
};
export function articlesSuccess (json) {
  return {
    type: actionTypes.ARTICLES_SUCCESS,
    language : json.language,
    list : json.list
 };
};
export function articlesFail (msg) {
  console.warn('Problem while retrieving articles : "' + msg + '"');
  return { type: actionTypes.ARTICLES_FAIL };
};


export function filterArticlesTitle (title) {
  return { type: actionTypes.FILTER_ARTICLES_TITLE, title : title };
};
export function filterArticlesCategory (categories) {
  return { type: actionTypes.FILTER_ARTICLES_CATEGORY, categories : categories };
};
export function filterArticlesLanguage (languages) {
  return { type: actionTypes.FILTER_ARTICLES_LANGUAGE, languages : languages };
};
export function emptyArticlesFilter () {
  return { type: actionTypes.EMPTY_ARTICLES_FILTER };
};
