import * as actionTypes from './actionTypes';

const initArticle = {
  isFetching : false,
  isDone : false,
  id : -1,
  language : '',
  title : '',
  date : '',
  keywords : [],
  body : '',
  footnotes : '',
  pdfFr : '',
  pdfEn : '',
  categoryId : -1,
  categoryName : '',
  authorId : -1,
  authorName : '',
  authorTitle : '',
  authorSchool : '',
  authorPic : ''
};
const articleReducer = function(state = initArticle, action) {
  switch (action.type) {
    case actionTypes.ARTICLE_REQUEST :
      return Object.assign({}, initArticle, { isFetching : true, isDone : false, id : action.id, language : action.language });
    case actionTypes.ARTICLE_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        id : action.id,
        language : action.language,
        title : action.title,
        date : action.date,
        keywords : action.keywords,
        body : action.body,
        footnotes : action.footnotes,
        pdfFr : action.pdfFr,
        pdfEn : action.pdfEn,
        categoryId : action.categoryId,
        categoryName : action.categoryName,
        authorId : action.authorId,
        authorName : action.authorName,
        authorTitle : action.authorTitle,
        authorSchool : action.authorSchool,
        authorPic : action.authorPic,
      });
    case actionTypes.ARTICLE_FAIL :
      return initArticle;
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
