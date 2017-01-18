import * as actionTypes from './actionTypes';

export function authorsRequest () {
  return { type: actionTypes.AUTHORS_REQUEST };
};
export function authorsSuccess (json) {
  return {
    type: actionTypes.AUTHORS_SUCCESS,
    list : json
 };
};
export function authorsFail (msg) {
  console.warn('Problem while retrieving authors : "' + msg + '"');
  return { type: actionTypes.AUTHORS_FAIL };
};
