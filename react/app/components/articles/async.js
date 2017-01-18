import * as actions from './actions';
import store from '../store';

export function getArticles (id) {
  fetch('/json/articles.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.articlesSuccess(json));
  })
  .catch(response => store.dispatch(actions.articlesFail(response)));
};
