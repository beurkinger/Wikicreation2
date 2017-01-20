import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';
import browserHistory from 'react-router/lib/browserHistory';

import About from './about/components/About';
import Article from './article/components/Article';
import Articles from './articles/components/Articles';
import Authors from './authors/components/Authors';
import Contribute from './contribute/components/Contribute';
import Home from './home/components/Home';
import Main from './main/components/Main';

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
