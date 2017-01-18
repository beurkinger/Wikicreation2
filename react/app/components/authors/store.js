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

const initAuthorsFilter = { theme : [] };
const authorsFilterReducer = function(state = initAuthorsFilter, action) {
  switch (action.type) {
    case actionTypes.FILTER_AUTHORS_THEME :
      return Object.assign({}, state, { theme : action.theme });
    default:
      return state;
  }
};

module.exports = {
  authors : authorsReducer,
  authorsFilter : authorsFilterReducer
}
