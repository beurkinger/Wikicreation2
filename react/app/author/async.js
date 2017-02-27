import {authorRequest, authorSuccess, authorFail, authorAuthorsSuccess} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getAuthor (id) {
  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.authors;
  let storeAuthor = store.getState().author;
  if ((parseInt(storeAuthor.id) === parseInt(id)) && (storeAuthor.language === locale)
  && (storeAuthor.isDone || storeAuthor.isFetching) ) return;
  store.dispatch(authorRequest(parseInt(id), locale));
  httpRequestHelper(baseUrl + '/' + parseInt(id),
    response => {
      store.dispatch(authorSuccess(response));
    },
    error => store.dispatch(authorFail(error))
  );
};
