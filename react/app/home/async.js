import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {previewRequest, previewSuccess, previewFail} from './actions';
import store from '../store';

export function getPreview (id) {

  store.dispatch(previewRequest());

  httpRequestHelper('/json/preview.json',
    response => store.dispatch(previewSuccess(response)),
    error => store.dispatch(previewFail(xhr.status + ':' + xhr.response))
  );
};
