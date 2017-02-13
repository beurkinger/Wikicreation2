import {categoriesRequest, categoriesSuccess, categoriesFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_PATHS} from '../config';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getCategories (id) {

  const baseUrl = REST_PATHS.categories;
  let locale = store.getState().messages.locale;
  var storeCategories = store.getState().categories;

  if (storeCategories.language === locale && (storeCategories.isFetching || storeCategories.isDone)) return;

  store.dispatch(categoriesRequest());

  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('lang', locale);

  httpRequestHelper(queryHelper.getUrl(),
    response => store.dispatch(categoriesSuccess(response)),
    error => store.dispatch(categoriesFail(error))
  );
};
