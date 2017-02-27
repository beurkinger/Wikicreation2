import {categoriesRequest, categoriesSuccess, categoriesFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getCategories (id) {

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
