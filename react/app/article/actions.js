import * as actionTypes from './actionTypes';

export function articleRequest (id, language) {
  return { type: actionTypes.ARTICLE_REQUEST, id : id, language : language };
};
export function articleSuccess (json) {
  return {
    type: actionTypes.ARTICLE_SUCCESS,
    id : json.id,
    title : json.title,
    language : json.language,
    date : json.date,
    keywords : json.keywords,
    abstract : json.abstract,
    summary : json.summary,
    body : json.body,
    footnotes : json.footnotes,
    pdfFr : json.pdfFr ? json.pdfFr : '',
    pdfEn : json.pdfEn ? json.pdfEn : '',
    categoryId : json.category[0].id,
    categoryName : json.category[0].name,
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
