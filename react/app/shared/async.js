import {categoriesRequest, categoriesSuccess, categoriesFail} from './actions';
import {newsRequest, newsSuccess, newsFail} from '../menu/actions';

import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getCategories () {

  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.categories;
  var storeCategories = store.getState().categories;

  if (storeCategories.language === locale && (storeCategories.isFetching || storeCategories.isDone)) return;

  store.dispatch(categoriesRequest());

  httpRequestHelper(baseUrl,
    response => store.dispatch(categoriesSuccess(response)),
    error => store.dispatch(categoriesFail(error))
  );
};

export function getInitData () {

  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.categories;

  store.dispatch(categoriesRequest());
  store.dispatch(newsRequest());

  httpRequestHelper(baseUrl,
    response => store.dispatch(categoriesSuccess(response)),
    error => store.dispatch(categoriesFail(error))
  );
};
