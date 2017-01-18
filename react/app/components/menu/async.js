import * as actions from './actions';
import store from '../store';

export function getNews () {
  fetch('/json/news.json')
  .then(response => response.json())
  .then(json => store.dispatch(actions.newsSuccess(json)))
  .catch(response => store.dispatch(actions.newsFail(response)));
};
