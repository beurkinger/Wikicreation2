import {articleRequest, articleSuccess, articleFail} from './actions';
import {authorSuccess} from '../author/actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getArticle (id) {

  var storeArticle = store.getState().article;
  if (storeArticle.isDone && storeArticle.id === parseInt(id)) return;

  store.dispatch(articleRequest());

  httpRequestHelper('/json/article.json',
    response => store.dispatch(articleSuccess(response)),
    error => store.dispatch(articleFail(error))
  );
};
