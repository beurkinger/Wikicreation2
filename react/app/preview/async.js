import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {previewRequest, previewSuccess, previewFail} from './actions';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getPreview (id) {

  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.preview;
  var storePreview = store.getState().preview;

  if (storePreview.language === locale && storePreview.id === parseInt(id)
  && (storePreview.isFetching || storePreview.isDone) ) return;

  store.dispatch(previewRequest(parseInt(id), locale));

  httpRequestHelper(baseUrl + '/' + parseInt(id),
    response => store.dispatch(previewSuccess(response)),
    error => store.dispatch(previewFail(xhr.status + ':' + xhr.response))
  );
};
