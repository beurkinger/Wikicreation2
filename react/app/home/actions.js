import * as actionTypes from './actionTypes';

export function graphDataRequest (id) {
  return { type: actionTypes.GRAPH_DATA_REQUEST };
};
export function graphDataSuccess (data) {
  return {
    type: actionTypes.GRAPH_DATA_SUCCESS,
    data : data
 };
};
export function graphDataFail (msg) {
  console.warn('Problem while retrieving graph data : "' + msg + '"');
  return { type: actionTypes.GRAPH_DATA_FAIL };
};


export function showPreviewPanel () {
  return { type: actionTypes.SHOW_PREVIEW_PANEL };
};
export function hidePreviewPanel () {
  return { type: actionTypes.HIDE_PREVIEW_PANEL };
};
export function extendPreviewPanel () {
  return { type: actionTypes.EXTEND_PREVIEW_PANEL };
};

export function previewRequest (id) {
  return { type: actionTypes.PREVIEW_REQUEST, id : id };
};
export function previewSuccess (json) {
  return {
    type: actionTypes.PREVIEW_SUCCESS,
    id : json.id,
    title : json.title,
    date : json.date,
    desc : json.desc,
    categoryId : json.category.id,
    categoryName : json.category.name,
    authorId : json.author.id,
    authorName : json.author.name
 };
};
export function previewFail (msg) {
  console.warn('Problem while retrieving previews : "' + msg + '"');
  return { type: actionTypes.PREVIEW_FAIL };
};
