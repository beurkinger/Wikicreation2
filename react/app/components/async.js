import * as actions from './actions';
import store from './store';

export function getNews () {
  fetch('/json/news.json')
  .then(response => response.json())
  .then(json => store.dispatch(actions.newsSuccess(json)))
  .catch(response => store.dispatch(actions.newsFail()));
};

export function geArticle (id) {
  fetch('/json/article.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.articleSuccess(json));
    store.dispatch(actions.authorSuccess(json.author));
  })
  .catch(response => store.dispatch(actions.articleFail()));
};

export function getAuthor (id) {
  fetch('/json/author.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.authorSuccess(json));
    store.dispatch(actions.authorArticlesSuccess(json));
  })
  .catch(response => store.dispatch(actions.authorFail()));
};
