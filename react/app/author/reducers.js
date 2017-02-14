import * as actionTypes from './actionTypes';

const initAuthor = {
  isFetching : false,
  isDone : false,
  id : -1,
  language : '',
  name : '',
  title : '',
  school : '',
  desc : '',
  pic : '',
  articles : []
};
const authorReducer = function(state = initAuthor, action) {
  switch (action.type) {
    case actionTypes.AUTHOR_REQUEST :
      return Object.assign({}, initAuthor, { isFetching : true, isDone : false, id : action.id, language : action.language });
    case actionTypes.AUTHOR_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        id : action.id,
        language : action.language,
        name : action.name,
        title : action.title,
        school : action.school,
        desc : action.desc,
        pic : action.pic,
        articles : action.articles
      });
    case actionTypes.AUTHOR_FAIL :
      return initAuthor;
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

module.exports = {
  author : authorReducer,
  authorPanel : authorPanelReducer
}
