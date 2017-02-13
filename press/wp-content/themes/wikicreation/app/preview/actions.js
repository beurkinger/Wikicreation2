import * as actionTypes from './actionTypes';

export function showPreviewPanel () {
  return { type: actionTypes.SHOW_PREVIEW_PANEL };
};
export function hidePreviewPanel () {
  return { type: actionTypes.HIDE_PREVIEW_PANEL };
};
export function extendPreviewPanel () {
  return { type: actionTypes.EXTEND_PREVIEW_PANEL };
};
export function hideExtendedPreviewPanel () {
  return { type: actionTypes.HIDE_EXTENDED_PREVIEW_PANEL };
};

export function previewRequest (id) {
  return { type: actionTypes.PREVIEW_REQUEST, id : id };
};
export function previewSuccess (json) {
  return {
    type: actionTypes.PREVIEW_SUCCESS,
    id : json.id,
    language : json.language,
    title : json.title,
    date : json.date,
    desc : json.desc,
    categoryId : json.category[0].id,
    categoryName : json.category[0].name,
    authorId : json.author.id,
    authorName : json.author.name
 };
};
export function previewFail (msg) {
  console.warn('Problem while retrieving previews : "' + msg + '"');
  return { type: actionTypes.PREVIEW_FAIL };
};
