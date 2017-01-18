import { createStore, combineReducers } from 'redux';

import articleReducers from './article/store';
import articlesReducers from './articles/store';
import authorReducers from './author/store';
import authorsReducers from './authors/store';
import headerReducers from './header/store';
import menuReducers from './menu/store';
import sharedReducers from './shared/store';

const mergeObjects = (objects) =>
{
  let newObj = {};
  for (let i = 0; i < objects.length; i ++)
  {
    let obj = objects[i];
    for (let key in obj)
    {
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
  headerReducers,
  menuReducers,
  sharedReducers
]);

const appReducers = combineReducers(reducers);

const store = createStore(appReducers);

module.exports = store;
