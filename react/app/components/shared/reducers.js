import * as actionTypes from './actionTypes';
import {APP_LOCALES} from '../constants';
import messages from './messages';

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

const initMessages = {
  locale : APP_LOCALES.EN,
  strings : messages[APP_LOCALES.EN]
};
const messagesReducer = function(state = initMessages, action) {
  switch (action.type) {
    case actionTypes.SET_LOCALE_FR :
      return Object.assign({}, state, {
        locale : APP_LOCALES.FR,
        strings : messages[APP_LOCALES.FR]
      });
    case actionTypes.SET_LOCALE_EN :
      return Object.assign({}, state, {
        locale : APP_LOCALES.EN,
        strings : messages[APP_LOCALES.EN]
      });
    default:
      return state;
  }
};

module.exports = {
  categories : categoriesReducer,
  messages : messagesReducer
};
