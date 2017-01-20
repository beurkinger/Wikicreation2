import * as actions from './actions';
import store from '../store';

export function getArticles (id) {
  const baseUrl = '/json/articles.json';
  let queryStr = '';
  let titleStr = '', categoriesStr = '', languagesStr = '';
  let filter = store.getState().articlesFilter;

  titleStr = String(filter.title).trim();
  if (titleStr && titleStr !== '') queryStr += 'title=' + titleStr;

  for (let i = 0 ; i < filter.categories.length ; i++) {
    if (i > 0) categoriesStr += ',';
    categoriesStr += filter.categories[i].toString().trim();
  }
  if (categoriesStr !== '') {
    queryStr += queryStr !== '' ? '&' : '';
    queryStr += 'categories=' + categoriesStr;
  }

  for (let i = 0 ; i < filter.languages.length ; i++) {
    if (i > 0) languagesStr += ',';
    languagesStr += filter.languages[i].toString().trim();
  }
  if (languagesStr !== '') {
    queryStr += queryStr !== '' ? '&' : '';
    queryStr += 'languages=' + languagesStr;
  }

  let url = baseUrl + (queryStr !== '' ? '?' + queryStr : '');

  fetch(url)
  .then(response => response.json())
  .then(json => {
    store.dispatch(actions.articlesSuccess(json));
  })
  .catch(response => store.dispatch(actions.articlesFail(response)));
};
