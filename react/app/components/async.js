import * as actions from './actions';
import store from './store';

export function getNews () {
  fetch('/json/news.json')
  .then(response => response.json())
  .then(json => store.dispatch(actions.newsSuccess(json)))
  .catch(response => store.dispatch(actions.newsFail(response)));
};

export function getArticles (id) {
  fetch('/json/articles.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.articlesSuccess(json));
  })
  .catch(response => store.dispatch(actions.articlesFail(response)));
};

export function getArticle (id) {
  fetch('/json/article.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.articleSuccess(json));
    store.dispatch(actions.authorSuccess(json.author));
  })
  .catch(response => store.dispatch(actions.articleFail(response)));
};

export function getAuthors (id) {
  fetch('/json/authors.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.authorsSuccess(json));
  })
  .catch(response => store.dispatch(actions.authorsFail(response)));
};


export function getAuthor (id) {
  fetch('/json/author.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.authorSuccess(json));
    store.dispatch(actions.authorArticlesSuccess(json));
  })
  .catch(response => store.dispatch(actions.authorFail(response)));
};

export function getCategories (id) {
  fetch('/json/categories.json')
  .then(response => response.json())
  .then(json => store.dispatch(actions.categoriesSuccess(json)))
  .catch(response => store.dispatch(actions.categoriesFail(response)));
};
