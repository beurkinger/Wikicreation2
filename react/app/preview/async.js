import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {previewRequest, previewSuccess, previewFail} from './actions';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getPreview (id, success, fail) {

  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.preview;
  var storePreview = store.getState().preview;

  if (storePreview.language === locale && storePreview.id === parseInt(id)) {
    if (storePreview.isFetching) {
      return;
    } else if (storePreview.isDone) {
      if (success && typeof success === 'function') success();
      return;
    }
  }

  store.dispatch(previewRequest(parseInt(id), locale));

  httpRequestHelper(baseUrl + '/' + parseInt(id),
    response => {
      store.dispatch(previewSuccess(response));
      if (success && typeof success === 'function') success();
    },
    error => {
      store.dispatch(previewFail(xhr.status + ':' + xhr.response));
      if (fail && typeof fail === 'function') fail();
    }
  );
};
