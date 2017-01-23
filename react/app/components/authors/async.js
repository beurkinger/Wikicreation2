import * as actions from './actions';
import store from '../store';
import QueryHelper from '../shared/helpers/QueryHelper';

export function getAuthors (id) {
  store.dispatch(actions.authorsRequest());
  
  const baseUrl = '/json/authors.json';
  let filter = store.getState().authorsFilter;
  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('name', filter.name);
  queryHelper.addArray('categories', filter.categories);

  fetch(queryHelper.getUrl())
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.authorsSuccess(json));
  })
  .catch(response => store.dispatch(actions.authorsFail(response)));
};
