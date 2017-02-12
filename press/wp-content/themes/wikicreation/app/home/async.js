import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {graphDataRequest, graphDataSuccess, graphDataFail} from './actions';
import {previewRequest, previewSuccess, previewFail} from './actions';
import {flatten, setLinks, getNodeByName} from './d3/graphHelpers';
import {REST_PATHS} from '../config';
import QueryHelper from '../shared/helpers/QueryHelper';
import store from '../store';

export function getGraphData(id) {

  const baseUrl = REST_PATHS.graphData;
  let locale = store.getState().messages.locale;
  let storeData = store.getState().graphData;

  if (storeData.language === locale && (storeData.isFetching || storeData.isDone)) return;

  store.dispatch(graphDataRequest());

  let queryHelper = new QueryHelper(baseUrl);
  queryHelper.addString('language', locale);

  httpRequestHelper(queryHelper.getUrl(),
    response => {
      let nodes = flatten(response.data);
      let links = setLinks(nodes);
      let parsedData = {nodes : nodes, links : links};
      store.dispatch(graphDataSuccess(response.language, parsedData));
    },
    error => store.dispatch(graphDataFail(xhr.status + ':' + xhr.response))
  );
};

export function getPreview (id) {

  const baseUrl = REST_PATHS.preview;
  let locale = store.getState().messages.locale;
  var storePreview = store.getState().preview;

  if (storePreview.language === locale && storePreview.id === parseInt(id)
  && (storePreview.isFetching || storePreview.isDone) ) return;

  store.dispatch(previewRequest(parseInt(id)));

  let queryHelper = new QueryHelper(baseUrl + '/' + parseInt(id));
  queryHelper.addString('language', locale);

  httpRequestHelper(queryHelper.getUrl(),
    response => store.dispatch(previewSuccess(response)),
    error => store.dispatch(previewFail(xhr.status + ':' + xhr.response))
  );
};
