import * as actionTypes from './actionTypes';

export function graphDataRequest (id) {
  return { type: actionTypes.GRAPH_DATA_REQUEST };
};
export function graphDataSuccess (language, data) {
  return {
    type: actionTypes.GRAPH_DATA_SUCCESS,
    language : language,
    data : data
 };
};
export function graphDataFail (msg) {
  console.warn('Problem while retrieving graph data : "' + msg + '"');
  return { type: actionTypes.GRAPH_DATA_FAIL };
};
