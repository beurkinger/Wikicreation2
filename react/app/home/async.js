import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {previewRequest, previewSuccess, previewFail} from './actions';
import store from '../store';

export function getPreview (id) {

  var storePreview = store.getState().preview;
  if (storePreview.id === parseInt(id) && (storePreview.isFetching || storePreview.isDone) ) return;

  store.dispatch(previewRequest(parseInt(id)));

  httpRequestHelper('/json/preview.json',
    response => store.dispatch(previewSuccess(response)),
    error => store.dispatch(previewFail(xhr.status + ':' + xhr.response))
  );
};
