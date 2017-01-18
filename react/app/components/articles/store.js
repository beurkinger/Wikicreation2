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

const initArticleLanguages = [
{
    id : 'fr',
    name : 'Français'
  },
  {
    id : 'en',
    name : 'Anglais'
  },
  {
    id : 'oth',
    name : 'Autres langues'
  }
];
const articleLanguagesReducer = function(state = initArticleLanguages, action) {
  return state;
};

const initArticlesFilter = { theme : [] };
const articlesFilterReducer = function(state = initArticlesFilter, action) {
  switch (action.type) {
    case actionTypes.FILTER_ARTICLES_THEME :
      return Object.assign({}, state, { theme : action.theme });
    default:
      return state;
  }
};

module.exports = {
  articles : articlesReducer,
  articleLanguages : articleLanguagesReducer,
  articlesFilter : articlesFilterReducer
};
