import * as actionTypes from './actionTypes';

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

module.exports = {
  categories : categoriesReducer
};
