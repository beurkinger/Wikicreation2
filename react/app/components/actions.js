import fetch from 'isomorphic-fetch';

import * as actionTypes from './actionTypes';

export function showTitlebar () {
  return { type: actionTypes.SHOW_TITLEBAR };
};
export function hideTitlebar () {
  return { type: actionTypes.HIDE_TITLEBAR };
};
export function setArticleTitlebar () {
  return {
    type: actionTypes.SET_ARTICLE_TITLEBAR
  };
};
export function setStdTitlebar (title) {
  return {
    type: actionTypes.SET_STD_TITLEBAR,
    title : title ? title : ''
  };
};
export function emptyTitlebar () {
  return { type: actionTypes.EMPTY_TITLEBAR };
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
  console.warn('Problem while retrieving news : "' + msg + '"');
  return { type: actionTypes.NEWS_FAIL };
};

export function articlesRequest () {
  return { type: actionTypes.ARTICLES_REQUEST };
};
export function articlesSuccess (json) {
  return {
    type: actionTypes.ARTICLES_SUCCESS,
    list : json
 };
};
export function articlesFail (msg) {
  console.warn('Problem while retrieving articles : "' + msg + '"');
  return { type: actionTypes.ARTICLES_FAIL };
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
  console.warn('Problem while retrieving articles : "' + msg + '"');
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
    list : json
 };
};
export function authorsFail (msg) {
  console.warn('Problem while retrieving authors : "' + msg + '"');
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
export function authorArticlesFail () {
  console.warn('Problem while retrieving articles : "' + msg + '"');
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
  console.warn('Problem while retrieving categories : "' + msg + '"');
  return { type: actionTypes.CATEGORIES_FAIL };
};
