import * as actionTypes from './actionTypes';

const initAuthors = {
  isFetching : false,
  isDone : false,
  language : '',
  list : []
};
const authorsReducer = function(state = initAuthors, action) {
  switch (action.type) {
    case actionTypes.AUTHORS_REQUEST :
      return Object.assign({}, state, { isFetching : true, isDone : false });
    case actionTypes.AUTHORS_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        language : action.language,
        list : action.list
      });
    case actionTypes.AUTHORS_FAIL :
      return Object.assign({}, state, { isFetching : false, isDone : false });
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
    case actionTypes.EMPTY_AUTHORS_FILTER :
      return Object.assign({}, state, initAuthorsFilter);
    default:
      return state;
  }
};

module.exports = {
  authors : authorsReducer,
  authorsFilter : authorsFilterReducer
}
