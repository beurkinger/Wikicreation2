import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routing from './Routing';

ReactDom.render(
  <Provider store={store}><Routing /></Provider>,
  document.getElementById('root')
);
