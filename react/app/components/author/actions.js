import * as actionTypes from './actionTypes';

export function authorRequest () {
  return { type: actionTypes.AUTHOR_REQUEST };
};
export function authorSuccess (json) {
  return {
    type: actionTypes.AUTHOR_SUCCESS,
    id : json.id,
    name : json.name,
    title : json.title,
    school : json.school,
    desc : json.desc,
    pic : json.pic
 };
};
export function authorFail (msg) {
  console.warn('Problem while retrieving author : "' + msg + '"');
  return { type: actionTypes.AUTHOR_FAIL };
};

export function authorArticlesRequest () {
  return { type: actionTypes.AUTHOR_ARTICLES_REQUEST };
};
export function authorArticlesSuccess (json) {
  return {
    type: actionTypes.AUTHOR_ARTICLES_SUCCESS,
    id : json.id,
    articles : json.articles
 };
};
export function authorArticlesFail (msg) {
  console.warn('Problem while retrieving articles : "' + msg + '"');
  return { type: actionTypes.AUTHOR_ARTICLES_FAIL };
};

export function showAuthorPanel () {
  return { type: actionTypes.SHOW_AUTHOR_PANEL };
};
export function hideAuthorPanel () {
  return { type: actionTypes.HIDE_AUTHOR_PANEL };
};
