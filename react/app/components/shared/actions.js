import * as actionTypes from './actionTypes';

export function categoriesRequest () {
  return { type: actionTypes.CATEGORIES_REQUEST };
};
export function categoriesSuccess (json) {
  return {
    type: actionTypes.CATEGORIES_SUCCESS,
    list : json
 };
};
export function categoriesFail (msg) {
  console.warn('Problem while retrieving categories : "' + msg + '"');
  return { type: actionTypes.CATEGORIES_FAIL };
};

export function setLocale (locale) {
  return { type: actionTypes.SET_LOCALE, locale: locale };
};
