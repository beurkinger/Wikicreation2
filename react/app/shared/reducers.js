import * as actionTypes from './actionTypes';
import {APP_LOCALES} from '../config';
import messages from './messages';

const initCategories = {
  isFetching : false,
  isDone : false,
  language : '',
  list : []
};
const categoriesReducer = function(state = initCategories, action) {
  switch (action.type) {
    case actionTypes.CATEGORIES_REQUEST :
      return Object.assign({}, state, { isFetching : true, isDone : false });
    case actionTypes.CATEGORIES_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        language : action.language,
        list : action.list
      });
    case actionTypes.CATEGORIES_FAIL :
      return Object.assign({}, state, { isFetching : false, isDone : false });
    default:
      return state;
  }
};

const initMessages = {
  locale : APP_LOCALES.FR,
  strings : messages[APP_LOCALES.FR]
};
const messagesReducer = function(state = initMessages, action) {
  switch (action.type) {
    case actionTypes.SET_LOCALE :
      return Object.assign({}, state, {
        locale : action.locale,
        strings : messages[action.locale]
      });
    default:
      return state;
  }
};

module.exports = {
  categories : categoriesReducer,
  messages : messagesReducer
};
