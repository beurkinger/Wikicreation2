import {authorRequest, authorSuccess, authorFail, authorAuthorsSuccess} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getAuthor (id) {

  var storeAuthor = store.getState().author;
  if (storeAuthor.id === parseInt(id) && (storeAuthor.isDone || storeAuthor.isFetching) ) return;
  
  store.dispatch(authorRequest(parseInt(id)));

  httpRequestHelper('/json/author.json',
    response => {
      store.dispatch(authorSuccess(response));
    },
    error => store.dispatch(authorFail(error))
  );
};
