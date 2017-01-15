import { createStore, combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const initTheme = 'blue';
const themeReducer = function(state = initTheme, action) {
  switch (action.type) {
    case actionTypes.SET_THEME_BLUE :
      return 'blue';
    case actionTypes.SET_THEME_WHITE :
      return 'white';
    default:
      return state;
  }
};

const initTitlebar = {
  isVisible : false,
  type : '',
  title : ''
};
const titlebarReducer = function(state = initTitlebar, action) {
  switch (action.type) {
    case actionTypes.SHOW_TITLEBAR :
      return Object.assign({}, state, { isVisible : true });
    case actionTypes.HIDE_TITLEBAR :
      return Object.assign({}, state, { isVisible : false });
    case actionTypes.SET_TITLEBAR :
      return Object.assign({}, state, {
        type : action.type,
        title : action.title
      });
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
  id : -1,
  name : '',
  title : '',
  desc : '',
  pic : ''
};
const authorReducer = function(state = initAuthor, action) {
  switch (action.type) {
    case actionTypes.AUTHOR_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.AUTHOR_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        id : action.id,
        name : action.name,
        title : action.title,
        desc : action.desc,
        pic : action.pic
      });
    case actionTypes.AUTHOR_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initAuthorPanel = {
  isVisible : false
};
const authorPanelReducer = function(state = initAuthorPanel, action) {
  switch (action.type) {
    case actionTypes.SHOW_AUTHOR_PANEL :
      return Object.assign({}, state, { isVisible : true });
    case actionTypes.HIDE_AUTHOR_PANEL :
      return Object.assign({}, state, { isVisible : false });
};

const initCategories = {
  isFetching : false,
  list : []
};
const categoriesReducer = function(state = initCategories, action) {
  switch (action.type) {
    case actionTypes.CATEGORIES_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.CATEGORIES_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        list : action.list
      });
    case actionTypes.CATEGORIES_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initAuthorArticles = {
  isFetching : false,
  id : -1,
  articles : []
};
const authorArticlesReducer = function(state = initAuthorArticles, action) {
  switch (action.type) {
    case actionTypes.AUTHOR_ARTICLES_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.AUTHOR_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching : false,
        id : action.id,
        articles : action.articles
      });
    case actionTypes.AUTHOR_ARTICLES_FAIL :
};

const initAuthors = {
  isFetching : false,
  list : []
};
const authorsReducer = function(state = initAuthors, action) {
  switch (action.type) {
    case actionTypes.AUTHORS_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.AUTHORS_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        list : action.list
      });
    case actionTypes.AUTHORS_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initArticleLanguages = [
{
    id : 'fr',
    name : 'Français'
  },
  {
    id : 'en',
    name : 'Anglais'
  },
  {
    id : 'oth',
    name : 'Autres langues'
  }
];
const articleLanguagesReducer = function(state = initArticleLanguages, action) {
  return state;
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
  titlebar : titlebarReducer,
  menu : menuReducer,
  news : newsReducer,
  article : articleReducer,
  read: readReducer,
  author : authorReducer,
  authorPanel : authorPanelReducer,
  authorArticles : authorArticlesReducer,
  categories : categoriesReducer,
  articleLanguages : articleLanguagesReducer,
  authorsFilter : authorsFilterReducer,
  articlesFilter : articlesFilterReducer
});

let store = createStore(appReducers);

module.exports = store;
