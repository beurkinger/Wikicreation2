import * as actionTypes from './actionTypes';

const initPreviewPanel = {
  isVisible : false,
  isExtended : false
};
const previewPanelReducer = function(state = initPreviewPanel, action) {
  switch (action.type) {
    case actionTypes.SHOW_PREVIEW_PANEL :
      return Object.assign({}, state, { isVisible : true, isExtended : false });
    case actionTypes.HIDE_PREVIEW_PANEL :
      return Object.assign({}, state, { isVisible : false, isExtended : false });
    case actionTypes.EXTEND_PREVIEW_PANEL :
      return Object.assign({}, state, { isVisible : true, isExtended : true });
    case actionTypes.HIDE_EXTENDED_PREVIEW_PANEL :
      return Object.assign({}, state, { isVisible : false, isExtended : true });
    default:
      return state;
  }
};

const initPreview = {
  isFetching : false,
  isDone : false,
  id : -1,
  language : '',
  title : '',
  date : '',
  desc : '',
  categoryId : -1,
  categoryName : '',
  authorId : -1,
  authorName : ''
};
const previewReducer = function(state = initPreview, action) {
  switch (action.type) {
    case actionTypes.PREVIEW_REQUEST :
      return Object.assign({}, initPreview, { isFetching : true, isDone : false, id : action.id });
    case actionTypes.PREVIEW_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        id : action.id,
        language : action.language,
        title : action.title,
        date : action.date,
        desc : action.desc,
        categoryId : action.categoryId,
        categoryName : action.categoryName,
        authorId : action.authorId,
        authorName : action.authorName
      });
    case actionTypes.PREVIEW_FAIL :
      return initPreview;
    default:
      return state;
  }
};

module.exports = {
  previewPanel : previewPanelReducer,
  preview : previewReducer
}
