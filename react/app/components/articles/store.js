import * as actionTypes from './actionTypes';

const initArticles = {
  isFetching : false,
  list : []
};
const articlesReducer = function(state = initArticles, action) {
  switch (action.type) {
    case actionTypes.ARTICLES_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.ARTICLES_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        list : action.list
      });
    case actionTypes.ARTICLES_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initArticlesFilter = { title : '', languages : [], categories : [] };
const articlesFilterReducer = function(state = initArticlesFilter, action) {
  switch (action.type) {
    case actionTypes.FILTER_ARTICLES_TITLE :
      return Object.assign({}, state, { title : action.title });
    case actionTypes.FILTER_ARTICLES_CATEGORY :
      return Object.assign({}, state, { categories : action.categories });
    case actionTypes.FILTER_ARTICLES_LANGUAGE :
      return Object.assign({}, state, { languages : action.languages });
    default:
      return state;
  }
};

module.exports = {
  articles : articlesReducer,
  articlesFilter : articlesFilterReducer
};
