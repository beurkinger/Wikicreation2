import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import {graphDataRequest, graphDataSuccess, graphDataFail} from './actions';
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
