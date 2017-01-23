import * as actions from './actions';
import store from '../store';

export function getCategories (id) {
  let isDone = store.getState().categories.isDone;
  if (isDone === true) return;

  store.dispatch(actions.categoriesRequest());

  fetch('/json/categories.json')
  .then(response => response.json())
  .then(json => store.dispatch(actions.categoriesSuccess(json)))
  .catch(response => store.dispatch(actions.categoriesFail(response)));
};
