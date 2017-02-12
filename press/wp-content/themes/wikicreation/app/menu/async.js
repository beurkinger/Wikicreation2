import {newsRequest, newsSuccess, newsFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_PATHS} from '../config';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getNews () {

  const baseUrl = REST_PATHS.news;
  let locale = store.getState().messages.locale;
  let storeNews = store.getState().news;

  if (storeNews.language === locale && (storeNews.isFetching || storeNews.isDone)) return;

  store.dispatch(newsRequest());

  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('language', locale);

  httpRequestHelper(queryHelper.getUrl(),
    response => store.dispatch(newsSuccess(response)),
    error => store.dispatch(newsFail(error))
  );
};
