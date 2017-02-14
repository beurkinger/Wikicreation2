import {authorsRequest, authorsSuccess, authorsFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_PATHS} from '../config';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getAuthors (id) {

  const baseUrl = REST_PATHS.authors;
  let locale = store.getState().messages.locale;
  // let storeAuthors = store.getState().authors;

  // if (storeAuthors.isFetching || storeAuthors.isDone) return;

  store.dispatch(authorsRequest());

  let filter = store.getState().authorsFilter;
  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('lang', locale);
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
