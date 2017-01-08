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
  news : {},
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
  authorsFilter : authorsFilterReducer,
  articlesFilter : articlesFilterReducer
});

let store = createStore(appReducers);

module.exports = store;
