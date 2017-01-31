import {newsRequest, newsSuccess, newsFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getNews () {
  var storeNews = store.getState().news;
  if (storeNews.isDone) return;

  store.dispatch(newsRequest());

  httpRequestHelper('/json/news.json',
    response => store.dispatch(newsSuccess(response)),
    error => store.dispatch(newsFail(error))
  );
};
