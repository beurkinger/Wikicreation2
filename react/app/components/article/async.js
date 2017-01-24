import {articleRequest, articleSuccess, articleFail} from './actions';
import {authorSuccess} from '../author/actions';
import store from '../store';

export function getArticle (id) {

  store.dispatch(articleRequest());

  let xhr = new XMLHttpRequest();
  xhr.open("GET", '/json/article.json', true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      store.dispatch(articleSuccess(response));
      store.dispatch(authorSuccess(response.author));
    }
    else {
      store.dispatch(articleFail(xhr.status + ':' + xhr.response));
    }
  }
  xhr.send(null);
};
