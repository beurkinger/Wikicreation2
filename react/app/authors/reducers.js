import * as actionTypes from './actionTypes';

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

const initAuthorsFilter = { name : '', categories : [] };
const authorsFilterReducer = function(state = initAuthorsFilter, action) {
  switch (action.type) {
    case actionTypes.FILTER_AUTHORS_NAME :
      return Object.assign({}, state, { name : action.name });
    case actionTypes.FILTER_AUTHORS_CATEGORY :
      return Object.assign({}, state, { categories : action.categories });
    default:
      return state;
  }
};

module.exports = {
  authors : authorsReducer,
  authorsFilter : authorsFilterReducer
}
