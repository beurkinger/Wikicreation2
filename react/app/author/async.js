import {authorRequest, authorSuccess, authorFail, authorArticlesSuccess} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getAuthor (id) {

  var storeAuthor = store.getState().author;
  if (storeAuthor.isDone && storeAuthor.id === parseInt(id)) return;

  store.dispatch(authorRequest());

  httpRequestHelper('/json/author.json',
    response => {
      store.dispatch(authorSuccess(response));
    },
    error => store.dispatch(authorFail(error))
  );
};
