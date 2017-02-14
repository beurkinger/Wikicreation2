import {articlesRequest, articlesSuccess, articlesFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import QueryHelper from '../shared/helpers/QueryHelper';
import {REST_PATHS} from '../config';
import store from '../store';

export function getArticles (id) {

  const baseUrl = REST_PATHS.articles;
  let locale = store.getState().messages.locale;
  // var storeArticles = store.getState().articles;
  // if (storeArticles.isFetching || storeArticles.isDone) return;

  store.dispatch(articlesRequest());

  let filter = store.getState().articlesFilter;

  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('lang', locale);
  queryHelper.addString('title', filter.title);
  queryHelper.addArray('categories', filter.categories);
  queryHelper.addArray('languages', filter.languages);

  httpRequestHelper(queryHelper.getUrl(),
    response => store.dispatch(articlesSuccess(response)),
    error => store.dispatch(articlesFail(error))
  );
};
