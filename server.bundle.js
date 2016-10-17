/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(1);
	var app = express();
	var path = __webpack_require__(2);
	//http = require("http"),
	var React = __webpack_require__(3);

	var _require = __webpack_require__(4);

	var renderToString = _require.renderToString;

	var _require2 = __webpack_require__(5);

	var match = _require2.match;
	var RouterContext = _require2.RouterContext;
	var routes = __webpack_require__(6);

	//app.use(path.join(__dirname, "public"));

	app.get('*', function (req, res) {
	  // match the routes to the url
	  match({ routes: routes, location: req.url }, function (err, redirect, props) {
	    // `RouterContext` is what the `Router` renders. `Router` keeps these
	    // `props` in its state as it listens to `browserHistory`. But on the
	    // server our app is stateless, so we need to use `match` to
	    // get these props before rendering.
	    if (err) console.error;
	    var appHtml = renderToString(React.createElement(RouterContext, props));

	    // dump the HTML into a template, lots of ways to do this, but none are
	    // really influenced by React Router, so we're just using a little
	    // function, `renderPage`
	    res.send(renderPage(appHtml));
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>React Router App</title>\n    <link rel=stylesheet href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">\n    <div id=app>' + appHtml + '</div>\n   ';
	}

	var PORT = process.env.PORT;

	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost: ' + PORT);
	});

	/*
	app.use(express.static(__dirname));

	app.get('/', function(req, res){

	    res.sendFile(path.join(__dirname, 'index.html'));
	});

	app.listen(process.env.PORT || port, function(){
	    console.log("listening on port: " + process.env.PORT);
	    console.log(__dirname);
	});


	/*
	app.get('/', function(req, res){

	    res.sendFile(path.join(__dirname, 'index.html'));
	});

	const server = http.createServer(app);

	reload(server, app);*/

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _app = __webpack_require__(7);

	var _app2 = _interopRequireDefault(_app);

	var _App_Nav = __webpack_require__(11);

	var _App_Nav2 = _interopRequireDefault(_App_Nav);

	var _CommentBox = __webpack_require__(9);

	var _CommentBox2 = _interopRequireDefault(_CommentBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import Repo from './Repo';
	//import Text from './Text.jsx';

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _app2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _App_Nav2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/repos', component: _CommentBox2.default })
	);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(8);

	var _require = __webpack_require__(5);

	var Router = _require.Router;
	var Route = _require.Route;
	var browserHistory = _require.browserHistory;
	var Link = _require.Link;
	var IndexRoute = _require.IndexRoute;

	var CommentBox = __webpack_require__(9);
	var Text = __webpack_require__(10);
	var NavBar = __webpack_require__(11);
	//let appRoutes = require('./routes/routes.jsx');
	//create the views, then route them, then use ajax calls

	var App = React.createClass({
	  displayName: "App",


	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(NavBar, { action: "render", name: "Menu" }),
	      React.createElement(Text, null)
	    );
	  }

	});

	module.exports = App;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(3);

	var CommentBox = React.createClass({
	  displayName: "CommentBox",

	  getInitialState: function getInitialState() {
	    return {
	      users: ["Steve", "Stephie"]
	    };
	  },
	  getUsers: function getUsers() {
	    var list = this.state.users.map(function (item, i) {
	      return React.createElement(
	        "li",
	        { key: i, id: "comment" + (i.toString() + 1) },
	        item
	      );
	    });
	    return list;
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "p",
	        null,
	        "Comment"
	      ),
	      React.createElement(
	        "ol",
	        { className: "primary" },
	        this.getUsers()
	      )
	    );
	  }
	});

	module.exports = CommentBox;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(3);

	module.exports = React.createClass({
	  displayName: "exports",


	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "col-sm-8 text-left" },
	      React.createElement(
	        "h1",
	        null,
	        "Welcome"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	      ),
	      React.createElement("hr", null),
	      React.createElement(
	        "h3",
	        null,
	        "Test"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Lorem ipsum..."
	      )
	    );
	  }

	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(3);

	var NavBar = React.createClass({
	  displayName: "NavBar",


	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "container" },
	      React.createElement(
	        "nav",
	        { className: "navbar navbar-default" },
	        React.createElement(
	          "div",
	          { className: "container-fluid" },
	          React.createElement(
	            "div",
	            { className: "navbar-header" },
	            React.createElement(
	              "button",
	              { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
	              React.createElement("span", { className: "icon-bar" }),
	              React.createElement("span", { className: "icon-bar" }),
	              React.createElement("span", { className: "icon-bar" })
	            ),
	            React.createElement(
	              "a",
	              { className: "navbar-brand", href: "#" },
	              "sPP"
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "collapse navbar-collapse", id: "myNavbar" },
	            React.createElement(
	              "ul",
	              { className: "nav navbar-nav" },
	              React.createElement(
	                "li",
	                { className: "active" },
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Home"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "About"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Projects"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Contact"
	                )
	              )
	            ),
	            React.createElement(
	              "ul",
	              { className: "nav navbar-nav navbar-right" },
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  React.createElement("span", { className: "glyphicon glyphicon-log-in" }),
	                  " Login"
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }

	});

	NavBar.proptypes = {
	  name: React.PropTypes.string.isRequired,
	  action: React.PropTypes.string
	};

	module.exports = NavBar;

/***/ }
/******/ ]);