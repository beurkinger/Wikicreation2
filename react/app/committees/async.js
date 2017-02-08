import {committeesRequest, committeesSuccess, committeesFail} from './actions';
import httpRequestHelper from '../shared/helpers/httpRequestHelper';
import store from '../store';

export function getCommittees () {
  var storeCommittees = store.getState().committees;
  if (storeCommittees.isDone) return;

  store.dispatch(committeesRequest());

  httpRequestHelper('/json/committees.json',
    response => store.dispatch(committeesSuccess(response)),
    error => store.dispatch(committeesFail(error))
  );
};
