import {authorRequest, authorSuccess, authorFail, authorAuthorsSuccess} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getAuthor (id, success, fail) {
  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.authors;
  let storeAuthor = store.getState().author;
  if ((parseInt(storeAuthor.id) === parseInt(id)) && (storeAuthor.language === locale)) {
    if (storeAuthor.isFetching) {
      return;
    } else if (storeAuthor.isDone ) {
      if (success && typeof success === 'function') success();
      return;
    }
  }
  store.dispatch(authorRequest(parseInt(id), locale));
  httpRequestHelper(baseUrl + '/' + parseInt(id),
    response => {
      store.dispatch(authorSuccess(response));
      if (success && typeof success === 'function') success();
    },
    error => {
      store.dispatch(authorFail(error))
      if (fail && typeof fail === 'function') fail();
    }
  );
};
