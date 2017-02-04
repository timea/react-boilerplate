var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// load foundation
$(document).foundation();

// load CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>React Boilerplate 3</p>,
  document.getElementById('app')
);
