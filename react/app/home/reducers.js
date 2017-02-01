import * as actionTypes from './actionTypes';


const initGraphData = {
  isFetching : false,
  isDone : false,
  data : {nodes : [], links : []}
};
const graphDataReducer = function(state = initGraphData, action) {
  switch (action.type) {
    case actionTypes.GRAPH_DATA_REQUEST :
      return Object.assign({}, initGraphData, { isFetching : true, isDone : false });
    case actionTypes.GRAPH_DATA_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        data : action.data
      });
    case actionTypes.GRAPH_DATA_FAIL :
      return initGraphData;
    default:
      return state;
  }
};

const initPreviewPanel = {
  isVisible : false,
  isExtended : false
};
const previewPanelReducer = function(state = initPreviewPanel, action) {
  switch (action.type) {
    case actionTypes.SHOW_PREVIEW_PANEL :
      return Object.assign({}, state, { isVisible : true });
    case actionTypes.HIDE_PREVIEW_PANEL :
      return Object.assign({}, state, { isVisible : false, isExtended : false });
    case actionTypes.EXTEND_PREVIEW_PANEL :
      return Object.assign({}, state, { isExtended : true });
    default:
      return state;
  }
};

const initPreview = {
  isFetching : false,
  isDone : false,
  id : -1,
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
  graphData : graphDataReducer,
  previewPanel : previewPanelReducer,
  preview : previewReducer
}
