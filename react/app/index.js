require("style-loader!css-loader!./css/style.css")

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App');

ReactDom.render(<App/>, document.getElementById('app'));
