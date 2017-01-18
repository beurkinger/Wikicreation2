import {articleSuccess, articleFail} from './actions';
import {authorSuccess} from '../author/actions';
import store from '../store';

export function getArticle (id) {
  fetch('/json/article.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(articleSuccess(json));
    store.dispatch(authorSuccess(json.author));
  })
  .catch(response => store.dispatch(articleFail(response)));
};
