import * as actions from './actions';
import store from '../store';

export function getAuthor (id) {
  store.dispatch(actions.authorRequest());

  fetch('/json/author.json')
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.authorSuccess(json));
    store.dispatch(actions.authorArticlesSuccess(json));
  })
  .catch(response => store.dispatch(actions.authorFail(response)));
};
