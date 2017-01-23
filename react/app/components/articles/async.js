import * as actions from './actions';
import store from '../store';
import QueryHelper from '../shared/helpers/QueryHelper';

export function getArticles (id) {
  store.dispatch(actions.articlesRequest());
  
  const baseUrl = '/json/articles.json';
  let filter = store.getState().articlesFilter;

  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('title', filter.title);
  queryHelper.addArray('categories', filter.categories);
  queryHelper.addArray('languages', filter.languages);

  fetch(queryHelper.getUrl())
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.articlesSuccess(json));
  })
  .catch(response => store.dispatch(actions.articlesFail(response)));
};
