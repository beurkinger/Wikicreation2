import {categoriesRequest, categoriesSuccess, categoriesFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getCategories (id) {
  let isDone = store.getState().categories.isDone;
  if (isDone === true) return;

  store.dispatch(categoriesRequest());

  httpRequestHelper('/json/categories.json',
    (response) => {
      store.dispatch(categoriesSuccess(response));
    },
    (error) => {
      store.dispatch(categoriesFail(error));
    }
  );
};
