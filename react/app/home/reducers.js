import * as actionTypes from './actionTypes';

const initGraphData = {
  isFetching : false,
  isDone : false,
  data : {nodes : [], links : []}
};
const graphDataReducer = function(state = initGraphData, action) {
  switch (action.type) {
    case actionTypes.GRAPH_DATA_REQUEST :
      return Object.assign({}, initGraphData, { isFetching : true, isDone : false });
    case actionTypes.GRAPH_DATA_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        language : action.language,
        data : action.data
      });
    case actionTypes.GRAPH_DATA_FAIL :
      return initGraphData;
    default:
      return state;
  }
};

module.exports = {
  graphData : graphDataReducer
}
