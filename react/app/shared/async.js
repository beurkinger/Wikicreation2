import {categoriesRequest, categoriesSuccess, categoriesFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getCategories (id) {
  if (store.getState().categories.isDone) return;

  store.dispatch(categoriesRequest());

  httpRequestHelper('/json/categories.json',
    response => store.dispatch(categoriesSuccess(response)),
    error => store.dispatch(categoriesFail(error))
  );
};
