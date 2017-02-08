import { createStore, combineReducers } from 'redux';

import articleReducers from './article/reducers';
import articlesReducers from './articles/reducers';
import authorReducers from './author/reducers';
import authorsReducers from './authors/reducers';
import committeesReducers from './committees/reducers';
import headerReducers from './header/reducers';
import menusBackgroundReducers from './main/reducers';
import menuReducers from './menu/reducers';
import previewReducers from './home/reducers';
import sharedReducers from './shared/reducers';

const mergeObjects = (objects) => {
  let newObj = {};
  for (let i = 0; i < objects.length; i ++) {
    let obj = objects[i];
    for (let key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const reducers = mergeObjects([
  articleReducers,
  articlesReducers,
  authorReducers,
  authorsReducers,
  committeesReducers,
  headerReducers,
  menuReducers,
  menusBackgroundReducers,
  previewReducers,
  sharedReducers
]);

const appReducers = combineReducers(reducers);

const store = createStore(appReducers);

module.exports = store;
