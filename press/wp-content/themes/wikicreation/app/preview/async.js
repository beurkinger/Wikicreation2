import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {previewRequest, previewSuccess, previewFail} from './actions';
import {REST_PATHS} from '../config';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getPreview (id) {

  const baseUrl = REST_PATHS.preview;
  let locale = store.getState().messages.locale;
  var storePreview = store.getState().preview;

  if (storePreview.language === locale && storePreview.id === parseInt(id)
  && (storePreview.isFetching || storePreview.isDone) ) return;

  store.dispatch(previewRequest(parseInt(id)));

  let queryHelper = new QueryHelper(baseUrl + '/' + parseInt(id));
  queryHelper.addString('lang', locale);

  httpRequestHelper(queryHelper.getUrl(),
    response => store.dispatch(previewSuccess(response)),
    error => store.dispatch(previewFail(xhr.status + ':' + xhr.response))
  );
};
