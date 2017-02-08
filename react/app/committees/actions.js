import * as actionTypes from './actionTypes';

export function committeesRequest () {
  return { type: actionTypes.COMMITTEES_REQUEST };
};
export function committeesSuccess (json) {
  return {
    type: actionTypes.COMMITTEES_SUCCESS,
    language : json.language,
    editorial : json.editorial,
    reading : json.reading,
    scientific : json.scientific
  };
};
export function committeesFail (msg) {
  console.warn('Problem while retrieving committees : "' + msg + '"');
  return { type: actionTypes.COMMITTEES_FAIL };
};
