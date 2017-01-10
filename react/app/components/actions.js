import fetch from 'isomorphic-fetch';

import * as actionTypes from './actionTypes';

export function setThemeBlue () {
  return { type: actionTypes.SET_THEME_BLUE };
};
export function setThemeWhite () {
  return { type: actionTypes.SET_THEME_WHITE };
};

export function showMenu () {
  return { type: actionTypes.SHOW_MENU };
};
export function hideMenu () {
  return { type: actionTypes.HIDE_MENU };
};

export function newsRequest () {
  return { type: actionTypes.NEWS_REQUEST };
};
export function newsSuccess (json) {
  return { type: actionTypes.NEWS_SUCCESS, articles : json };
};
export function newsFail () {
  return { type: actionTypes.NEWS_FAIL };
};

export function articleRequest () {
  return { type: actionTypes.ARTICLE_REQUEST };
};
export function articleSuccess (json) {
  return {
    type: actionTypes.ARTICLE_SUCCESS,
    id : json.id,
    title : json.title,
    date : json.date,
    keywords : json.keywords,
    body : json.body,
    categoryId : json.category.id,
    categoryName : json.category.name,
    authorId : json.author.id
 };
};
export function articleFail () {
  return { type: actionTypes.ARTICLE_FAIL };
};

export function authorRequest () {
  return { type: actionTypes.ARTICLE_REQUEST };
};
export function authorSuccess (json) {
  return {
    type: actionTypes.AUTHOR_SUCCESS,
    id : json.id,
    name : json.name,
    title : json.title,
    pic : json.pic
 };
};
export function authorFail () {
  return { type: actionTypes.AUTHOR_FAIL };
};
