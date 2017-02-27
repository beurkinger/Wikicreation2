import {articleRequest, articleSuccess, articleFail} from './actions';
import {authorSuccess} from '../author/actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getArticle (id) {
  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.articles;
  let storeArticle = store.getState().article;

  if (storeArticle.id === parseInt(id) && storeArticle.language === locale
  && (storeArticle.isDone || storeArticle.isFetching) ) return;

  store.dispatch(articleRequest(parseInt(id), locale));

  httpRequestHelper(baseUrl + '/' + parseInt(id),
    response => store.dispatch(articleSuccess(response)),
    error => store.dispatch(articleFail(error))
  );
};
