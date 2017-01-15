import fetch from 'isomorphic-fetch';

import * as actionTypes from './actionTypes';

export function showTitlebar () {
  return { type: actionTypes.SHOW_TITLEBAR };
};
export function hideTitlebar () {
  return { type: actionTypes.HIDE_TITLEBAR };
};
export function setTitlebar (pageType, title) {
  return {
    type: actionTypes.SET_TITLEBAR,
    pageType : pageType,
    title : title ? title : ''
  };
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
    pdfFr : json.pdfFr,
    pdfEn : json.pdfEn,
    categoryId : json.category.id,
    categoryName : json.category.name,
    authorId : json.author.id
 };
};
export function articleFail () {
  return { type: actionTypes.ARTICLE_FAIL };
};

export function setPercentRead (percent) {
  return { type: actionTypes.SET_PERCENT_READ, percent : percent  };
};

export function authorsRequest () {
  return { type: actionTypes.AUTHORS_REQUEST };
};
export function authorsSuccess (json) {
  return {
    type: actionTypes.AUTHORS_SUCCESS,
    list : json.list
 };
};
export function authorsFail () {
  return { type: actionTypes.AUTHORS_FAIL };
};

export function authorRequest () {
  return { type: actionTypes.AUTHOR_REQUEST };
};
export function authorSuccess (json) {
  return {
    type: actionTypes.AUTHOR_SUCCESS,
    id : json.id,
    name : json.name,
    title : json.title,
    desc : json.desc,
    pic : json.pic
 };
};
export function authorFail () {
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
export function authorArticlesFail () {
  return { type: actionTypes.AUTHOR_ARTICLES_FAIL };
};

export function showAuthorPanel () {
  return { type: actionTypes.SHOW_AUTHOR_PANEL };
};
export function hideAuthorPanel () {
  return { type: actionTypes.HIDE_AUTHOR_PANEL };
};

export function categoriesRequest () {
  return { type: actionTypes.CATEGORIES_REQUEST };
};
export function categoriesSuccess (json) {
  return {
    type: actionTypes.CATEGORIES_SUCCESS,
    list : json
 };
};
export function categoriesFail () {
  return { type: actionTypes.CATEGORIES_FAIL };
};
