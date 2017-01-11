import { createStore, combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const initTheme = 'blue';
const themeReducer = function(state = initTheme, action) {
  switch (action.type) {
    case actionTypes.SET_THEME_BLUE :
      return 'blue';
    case actionTypes.SET_THEME_WHITE :
      return '';
    default:
      return state;
  }
};

const initMenu = {
  isVisible : false,
  mainLinks : [
    { name :  'Accueil', path : '/', index: true },
    { name :  'À propos', path : '/about' },
    { name :  'Articles', path : '/articles' },
    { name :  'Auteurs', path : '/authors' },
    { name :  'Contribuer', path : '/contribute' }
  ],
  secondaryLinks : [
    { name :  'Comité', path : '/committee' },
    { name :  'Crédits et contact', path : '/credits-contacts' },
    { name :  'Mentions légales', path : '/legal' },
  ]
};
const menuReducer = function(state = initMenu, action) {
  switch (action.type) {
    case actionTypes.SHOW_MENU :
      return Object.assign({}, state, { isVisible : true });
    case actionTypes.HIDE_MENU :
      return Object.assign({}, state, { isVisible : false });
    default:
      return state;
  }
};

const initNews = {
  isFetching : false,
  articles : []
};
const newsReducer = function(state = initNews, action) {
  switch (action.type) {
    case actionTypes.NEWS_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.NEWS_SUCCESS :
      return Object.assign({}, state, { isFetching : false, articles : action.articles });
      case actionTypes.NEWS_FAIL :
        return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initArticle = {
  isFetching : false,
  id : -1,
  title : '',
  date : '',
  keywords : [],
  body : '',
  pdfFr : '',
  pdfEn : '',
  categoryId : -1,
  categoryName : '',
  authorId : -1,
};
const articleReducer = function(state = initArticle, action) {
  switch (action.type) {
    case actionTypes.ARTICLE_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.ARTICLE_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        id : action.id,
        title : action.title,
        date : action.date,
        keywords : action.keywords,
        body : action.body,
        pdfFr : action.pdfFr,
        pdfEn : action.pdfEn,
        categoryId : action.categoryId,
        categoryName : action.categoryName,
        authorId : action.authorId
      });
    case actionTypes.ARTICLE_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initRead = 0;
const readReducer = function(state = initRead, action) {
  switch (action.type) {
    case actionTypes.SET_PERCENT_READ :
      return action.percent;
    default:
      return state;
  }
};

const initAuthor = {
  isFetching : false,
  isVisible : false,
  id : 0,
  name : '',
  title : '',
  pic : ''
};
const authorReducer = function(state = initAuthor, action) {
  switch (action.type) {
    case actionTypes.SHOW_AUTHOR :
      return Object.assign({}, state, { isVisible : true });
    case actionTypes.HIDE_AUTHOR :
      return Object.assign({}, state, { isVisible : false });
    case actionTypes.AUTHOR_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.AUTHOR_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        id : action.id,
        name : action.name,
        title : action.title,
        pic : action.pic
      });
    case actionTypes.AUTHOR_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initAuthorsFilter = { theme : [] };
const authorsFilterReducer = function(state = initAuthorsFilter, action) {
  switch (action.type) {
    case actionTypes.FILTER_AUTHORS_THEME :
      return Object.assign({}, state, { theme : action.theme });
    default:
      return state;
  }
};

const initArticlesFilter = { theme : [] };
const articlesFilterReducer = function(state = initArticlesFilter, action) {
  switch (action.type) {
    case actionTypes.FILTER_ARTICLES_THEME :
      return Object.assign({}, state, { theme : action.theme });
    default:
      return state;
  }
};

const appReducers = combineReducers({
  theme : themeReducer,
  menu : menuReducer,
  news : newsReducer,
  article : articleReducer,
  read: readReducer,
  author : authorReducer,
  authorsFilter : authorsFilterReducer,
  articlesFilter : articlesFilterReducer
});

let store = createStore(appReducers);

module.exports = store;
