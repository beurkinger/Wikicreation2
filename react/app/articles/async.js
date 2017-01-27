import {articlesRequest, articlesSuccess, articlesFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getArticles (id) {
  store.dispatch(articlesRequest());

  const baseUrl = '/json/articles.json';
  let filter = store.getState().articlesFilter;

  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('title', filter.title);
  queryHelper.addArray('categories', filter.categories);
  queryHelper.addArray('languages', filter.languages);

  httpRequestHelper(queryHelper.getUrl(),
    (response) => {
      store.dispatch(articlesSuccess(response))
    },
    (error) => {
      store.dispatch(articlesFail(error))
    }
  );
};
