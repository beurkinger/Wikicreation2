import * as actionTypes from './actionTypes';

export function authorRequest (id) {
  return { type: actionTypes.AUTHOR_REQUEST, id : id };
};
export function authorSuccess (json) {
  console.log(json);
  return {
    type: actionTypes.AUTHOR_SUCCESS,
    id : json.id,
    language : json.language,
    name : json.name,
    title : json.title,
    school : json.school,
    desc : json.desc,
    pic : json.pic,
    articles : json.articles
 };
};
export function authorFail (msg) {
  console.warn('Problem while retrieving author : "' + msg + '"');
  return { type: actionTypes.AUTHOR_FAIL };
};

export function showAuthorPanel () {
  return { type: actionTypes.SHOW_AUTHOR_PANEL };
};
export function hideAuthorPanel () {
  return { type: actionTypes.HIDE_AUTHOR_PANEL };
};
