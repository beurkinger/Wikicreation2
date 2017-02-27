import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {graphDataRequest, graphDataSuccess, graphDataFail} from './actions';
import {flatten, setLinks, getNodeByName} from './d3/graphHelpers';
import {REST_MAIN_PATH, REST_PATHS} from '../config';
import store from '../store';

export function getGraphData(id) {

  let locale = store.getState().messages.locale;
  const baseUrl = '/' + locale + REST_MAIN_PATH + REST_PATHS.graphData;
  let storeData = store.getState().graphData;

  if (storeData.language === locale && (storeData.isFetching || storeData.isDone)) return;

  store.dispatch(graphDataRequest());

  httpRequestHelper(baseUrl,
    response => {
      let nodes = flatten(response.data);
      let links = setLinks(nodes);
      let parsedData = {nodes : nodes, links : links};
      store.dispatch(graphDataSuccess(response.language, parsedData));
    },
    error => store.dispatch(graphDataFail(xhr.status + ':' + xhr.response))
  );
};
