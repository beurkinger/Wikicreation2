import * as actionTypes from './actionTypes';

const initMenu = {
  isVisible : false,
  mainLinks : [
    { name :  'home', path : '/', index: true },
    { name :  'about', path : '/about' },
    { name :  'articles', path : '/articles' },
    { name :  'authors', path : '/authors' },
    { name :  'contribute', path : '/contribute' }
  ],
  secondaryLinks : [
    { name :  'committee', path : '/committee' },
    { name :  'creditsAndContacts', path : '/credits-and-contact' },
    { name :  'legalNotice', path : '/legal' },
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
  isDone : false,
  list : []
};
const newsReducer = function(state = initNews, action) {
  switch (action.type) {
    case actionTypes.NEWS_REQUEST :
      return Object.assign({}, state, { isFetching : true, isDone : false });
    case actionTypes.NEWS_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        language : action.language,
        list : action.list
      });
      case actionTypes.NEWS_FAIL :
        return Object.assign({}, state, { isFetching : false, isDone : false });
    default:
      return state;
  }
};

module.exports = {
  menu : menuReducer,
  news : newsReducer
};
