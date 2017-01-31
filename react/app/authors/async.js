import {authorsRequest, authorsSuccess, authorsFail} from './actions';
import QueryHelper from '../shared/helpers/QueryHelper';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getAuthors (id) {

  var storeAuthors = store.getState().authors;
  if (storeAuthors.isFetching || storeAuthors.isDone) return;

  store.dispatch(authorsRequest());

  const baseUrl = '/json/authors.json';
  let filter = store.getState().authorsFilter;
  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('name', filter.name);
  queryHelper.addArray('categories', filter.categories);

  httpRequestHelper(queryHelper.getUrl(),
    (response) => {
      store.dispatch(authorsSuccess(response));
    },
    (error) => {
      store.dispatch(authorsFail(error));
    }
  );
};
