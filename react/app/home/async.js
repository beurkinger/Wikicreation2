import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {graphDataRequest, graphDataSuccess, graphDataFail} from './actions';
import {previewRequest, previewSuccess, previewFail} from './actions';
import {flatten, setLinks, getNodeByName} from './d3/graphHelpers';
import store from '../store';

export function getGraphData(id) {

  var storeGraphData = store.getState().graphData;
  if (storeGraphData.isFetching || storeGraphData.isDone ) return;

  store.dispatch(graphDataRequest());

  httpRequestHelper('/json/graph-data.json',
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

  var storePreview = store.getState().preview;
  if (storePreview.id === parseInt(id) && (storePreview.isFetching || storePreview.isDone) ) return;

  store.dispatch(previewRequest(parseInt(id)));

  httpRequestHelper('/json/preview.json',
    response => store.dispatch(previewSuccess(response)),
    error => store.dispatch(previewFail(xhr.status + ':' + xhr.response))
  );
};
