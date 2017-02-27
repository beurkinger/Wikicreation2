import {newsRequest, newsSuccess, newsFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getNews () {

  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.news;
  let storeNews = store.getState().news;

  if (storeNews.language === locale && (storeNews.isFetching || storeNews.isDone)) return;

  store.dispatch(newsRequest(locale));

  httpRequestHelper(baseUrl,
    response => store.dispatch(newsSuccess(response)),
    error => store.dispatch(newsFail(error))
  );
};
