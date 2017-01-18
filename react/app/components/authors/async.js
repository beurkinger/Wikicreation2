import * as actions from './actions';
import store from '../store';

export function getAuthors (id) {
  fetch('/json/authors.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.authorsSuccess(json));
  })
  .catch(response => store.dispatch(actions.authorsFail(response)));
};
