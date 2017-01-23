import * as actions from './actions';
import store from '../store';

export function getNews () {
  let isDone = store.getState().news.isDone;
  if (isDone) return;

  store.dispatch(actions.newsRequest());

  fetch('/json/news.json')
  .then(response => response.json())
  .then(json => store.dispatch(actions.newsSuccess(json)))
  .catch(response => store.dispatch(actions.newsFail(response)));
};
