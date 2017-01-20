import * as actionTypes from './actionTypes';

const initArticle = {
  isFetching : false,
  id : -1,
  title : '',
  date : '',
  keywords : [],
  body : '',
  pdfFr : '',
  pdfEn : '',
  categoryId : -1,
  categoryName : '',
  authorId : -1,
};
const articleReducer = function(state = initArticle, action) {
  switch (action.type) {
    case actionTypes.ARTICLE_REQUEST :
      return Object.assign({}, state, { isFetching : true });
    case actionTypes.ARTICLE_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        id : action.id,
        title : action.title,
        date : action.date,
        keywords : action.keywords,
        body : action.body,
        pdfFr : action.pdfFr,
        pdfEn : action.pdfEn,
        categoryId : action.categoryId,
        categoryName : action.categoryName,
        authorId : action.authorId
      });
    case actionTypes.ARTICLE_FAIL :
      return Object.assign({}, state, { isFetching : false });
    default:
      return state;
  }
};

const initRead = 0;
const readReducer = function(state = initRead, action) {
  switch (action.type) {
    case actionTypes.SET_PERCENT_READ :
      return action.percent;
    default:
      return state;
  }
};

module.exports = {
  article : articleReducer,
  read : readReducer
};
