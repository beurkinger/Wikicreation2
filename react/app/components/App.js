import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import About from './About';
import Article from'./Article';
import Articles from './Articles';
import Authors from './Authors';
import Contribute from './Contribute';
import Home from './Home';
import Main from './Main';

var App = React.createClass({
  render: () => (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/article/:articleId" component={Article}/>
        <Route path="/articles" component={Articles}/>
        <Route path="/authors" component={Authors}/>
        <Route path="/contribute" component={Contribute}/>
      </Route>
    </Router>
  )
});

module.exports = App;
