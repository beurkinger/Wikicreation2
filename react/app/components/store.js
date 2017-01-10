import { createStore, combineReducers } from 'redux';

const initTheme = 'blue';
const themeReducer = function(state = initTheme, action) {
  switch (action.type) {
    case 'SET_THEME_BLUE' :
      return 'blue';
    case 'SET_THEME_WHITE' :
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
    case 'SHOW_MENU' :
      return Object.assign({}, state, { isVisible : true });
    case 'HIDE_MENU' :
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
    case 'NEWS_REQUEST' :
      return Object.assign({}, state, { isFetching : true });
    case 'NEWS_SUCCESS' :
      return Object.assign({}, state, { isFetching : false, articles : action.articles });
      case 'NEWS_FAIL' :
        return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initAuthorsFilter = { theme : [] };
const authorsFilterReducer = function(state = initAuthorsFilter, action) {
  switch (action.type) {
    case 'FILTER_AUTHORS_THEME' :
      return Object.assign({}, state, { theme : action.theme });
    default:
      return state;
  }
};

const initArticlesFilter = { theme : [] };
const articlesFilterReducer = function(state = initArticlesFilter, action) {
  switch (action.type) {
    case 'FILTER_ARTICLES_THEME' :
      return Object.assign({}, state, { theme : action.theme });
    default:
      return state;
  }
};

const appReducers = combineReducers({
  theme : themeReducer,
  menu : menuReducer,
  news : newsReducer,
  authorsFilter : authorsFilterReducer,
  articlesFilter : articlesFilterReducer
});

let store = createStore(appReducers);

module.exports = store;
