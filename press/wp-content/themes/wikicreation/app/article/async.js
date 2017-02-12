import {articleRequest, articleSuccess, articleFail} from './actions';
import {authorSuccess} from '../author/actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_PATHS} from '../config';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getArticle (id) {

  const baseUrl = REST_PATHS.articles;
  let locale = store.getState().messages.locale;
  let storeArticle = store.getState().article;

  if (storeArticle.id === parseInt(id) && storeArticle.language === locale
  && (storeArticle.isDone || storeArticle.isFetching) ) return;

  store.dispatch(articleRequest(parseInt(id)));

  let queryHelper = new QueryHelper(baseUrl + '/' + parseInt(id));
  queryHelper.addString('language', locale);

  httpRequestHelper(queryHelper.getUrl(),
    response => store.dispatch(articleSuccess(response)),
    error => store.dispatch(articleFail(error))
  );
};
