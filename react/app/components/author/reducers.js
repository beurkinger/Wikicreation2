import * as actionTypes from './actionTypes';

const initAuthor = {
  isFetching : false,
  isDone : false,
  id : -1,
  name : '',
  title : '',
  desc : '',
  pic : ''
};
const authorReducer = function(state = initAuthor, action) {
  switch (action.type) {
    case actionTypes.AUTHOR_REQUEST :
      return Object.assign({}, state, { isFetching : true, isDone : false });
    case actionTypes.AUTHOR_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        id : action.id,
        name : action.name,
        title : action.title,
        desc : action.desc,
        pic : action.pic
      });
    case actionTypes.AUTHOR_FAIL :
      return Object.assign({}, state, { isFetching : false, isDone : false });
    default:
      return state;
  }
};

const initAuthorPanel = {
  isVisible : false
};
const authorPanelReducer = function(state = initAuthorPanel, action) {
  switch (action.type) {
    case actionTypes.SHOW_AUTHOR_PANEL :
      return Object.assign({}, state, { isVisible : true });
    case actionTypes.HIDE_AUTHOR_PANEL :
      return Object.assign({}, state, { isVisible : false });
    default:
      return state;
  }
};

const initAuthorArticles = {
  isFetching : false,
  id : -1,
  articles : []
};
const authorArticlesReducer = function(state = initAuthorArticles, action) {
  switch (action.type) {
    case actionTypes.AUTHOR_ARTICLES_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.AUTHOR_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching : false,
        id : action.id,
        articles : action.articles
      });
    case actionTypes.AUTHOR_ARTICLES_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

module.exports = {
  author : authorReducer,
  authorArticles : authorArticlesReducer,
  authorPanel : authorPanelReducer
}
