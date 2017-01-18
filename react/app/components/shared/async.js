import * as actions from './actions';
import store from '../store';

export function getCategories (id) {
  fetch('/json/categories.json')
  .then(response => response.json())
  .then(json => store.dispatch(actions.categoriesSuccess(json)))
  .catch(response => store.dispatch(actions.categoriesFail(response)));
};
