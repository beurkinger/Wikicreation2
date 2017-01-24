import {newsRequest, newsSuccess, newsFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getNews () {
  let isDone = store.getState().news.isDone;
  if (isDone) return;

  store.dispatch(newsRequest());

  httpRequestHelper('/json/news.json',
    (response) => {
      store.dispatch(newsSuccess(response));
    },
    (error) => {
      store.dispatch(newsFail(error));
    }
  );
};
