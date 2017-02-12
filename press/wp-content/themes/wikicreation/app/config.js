export const IS_PROD = false;

export const WEBSITE_URL = 'http://www.wikicreation-test.fr';

export const REST_MAIN_PATH = '/wp-json/wp/v2';

export const REST_PATHS = {
  articles : REST_MAIN_PATH + '/articles',
  authors : REST_MAIN_PATH + '/authors',
  categories : REST_MAIN_PATH + '/categories',
  graphData : REST_MAIN_PATH + '/graph-data',
  news : REST_MAIN_PATH + '/news',
  preview : REST_MAIN_PATH + '/preview',
};

export const APP_LOCALES = { FR : 'fr', EN : 'en' };
