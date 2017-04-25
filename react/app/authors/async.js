import {authorsRequest, authorsSuccess, authorsFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getAuthors (id, success, fail) {

  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.authors;
  // let storeAuthors = store.getState().authors;

  // if (storeAuthors.isFetching || storeAuthors.isDone) return;

  store.dispatch(authorsRequest());

  let filter = store.getState().authorsFilter;
  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('name', filter.name);
  queryHelper.addArray('categories', filter.categories);

  httpRequestHelper(queryHelper.getUrl(),
    response => {
      store.dispatch(authorsSuccess(response));
      if (success && typeof success === 'function') success();
    },
    error => {
      store.dispatch(authorsFail(error));
      if (fail && typeof fail === 'function') fail();
    }
  );
};
