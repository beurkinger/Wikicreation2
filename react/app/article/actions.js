import * as actionTypes from './actionTypes';

export function articleRequest () {
  return { type: actionTypes.ARTICLE_REQUEST };
};
export function articleSuccess (json) {
  return {
    type: actionTypes.ARTICLE_SUCCESS,
    id : json.id,
    title : json.title,
    date : json.date,
    keywords : json.keywords,
    body : json.body,
    pdfFr : json.pdfFr,
    pdfEn : json.pdfEn,
    categoryId : json.category.id,
    categoryName : json.category.name,
    authorId : json.author.id,
    authorName : json.author.name,
    authorTitle : json.author.title,
    authorSchool : json.author.school,
    authorPic : json.author.pic,
 };
};
export function articleFail (msg) {
  console.warn('Problem while retrieving articles : "' + msg + '"');
  return { type: actionTypes.ARTICLE_FAIL };
};

export function setPercentRead (percent) {
  return { type: actionTypes.SET_PERCENT_READ, percent : percent  };
};
