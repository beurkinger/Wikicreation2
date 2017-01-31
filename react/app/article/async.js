import {articleRequest, articleSuccess, articleFail} from './actions';
import {authorSuccess} from '../author/actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getArticle (id) {

  var storeArticle = store.getState().article;
  if (storeArticle.id === parseInt(id) && (storeArticle.isDone || storeArticle.isFetching) ) return;

  store.dispatch(articleRequest(parseInt(id)));

  httpRequestHelper('/json/article.json',
    response => store.dispatch(articleSuccess(response)),
    error => store.dispatch(articleFail(error))
  );
};
