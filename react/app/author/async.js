import {authorRequest, authorSuccess, authorFail, authorAuthorsSuccess} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getAuthor (id) {

  const baseUrl = '/json/author.json';
  let locale = store.getState().messages.locale;
  let storeAuthor = store.getState().author;

  if (storeAuthor.id === parseInt(id) && storeAuthor.language === locale
  && (storeAuthor.isDone || storeAuthor.isFetching) ) return;

  store.dispatch(authorRequest(parseInt(id)));

  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('language', locale);

  httpRequestHelper(queryHelper.getUrl(),
    response => {
      store.dispatch(authorSuccess(response));
    },
    error => store.dispatch(authorFail(error))
  );
};
