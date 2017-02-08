import * as actionTypes from './actionTypes';

const initCommittees = {
  isFetching : false,
  isDone : false,
  editorial : [],
  reading : [],
  scientific : []
};
const committeesReducer = function(state = initCommittees, action) {
  switch (action.type) {
    case actionTypes.COMMITTEES_REQUEST :
      return Object.assign({}, state, { isFetching : true, isDone : false });
    case actionTypes.COMMITTEES_SUCCESS :
      return Object.assign({}, state, {
        isFetching : false,
        isDone : true,
        language : action.language,
        editorial : action.editorial,
        reading : action.reading,
        scientific : action.scientific,
      });
      case actionTypes.COMMITTEES_FAIL :
        return Object.assign({}, state, { isFetching : false, isDone : false });
    default:
      return state;
  }
};

module.exports = {
  committees : committeesReducer
};
