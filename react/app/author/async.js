import {authorRequest, authorSuccess, authorFail, authorArticlesSuccess} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getAuthor (id) {
  store.dispatch(authorRequest());

  httpRequestHelper('/json/author.json',
    (response) => {
      store.dispatch(authorSuccess(response));
      store.dispatch(authorArticlesSuccess(response));
    },
    (error) => {
      store.dispatch(authorFail(error));
    }
  );
};
