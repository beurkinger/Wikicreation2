import * as actionTypes from './actionTypes';

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

module.exports = {
  menu : menuReducer,
  news : newsReducer
};
