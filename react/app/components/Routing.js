import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import About from './About';
import Article from'./Article';
import Articles from './Articles';
import Authors from './Authors';
import Contribute from './Contribute';
import Home from './Home';
import Main from './Main';

const Routing = React.createClass({
  render: () => (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={Articles}/>
        <Route path="/articles/:id" component={Article}/>
        <Route path="/authors" component={Authors}/>
        <Route path="/contribute" component={Contribute}/>
      </Route>
    </Router>
  )
});

module.exports = Routing;
