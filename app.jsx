"use strict";
let React = require("react");
let ReactDOM = require("react-dom");
let { Router, Route, browserHistory, Link, IndexRoute } = require("react-router");
let CommentBox = require("./routes/CommentBox.jsx");
//let Users = require("./routes/Users.jsx");
let NavBar = require("./routes/App_Nav.jsx");
//let appRoutes = require('./routes/routes.jsx');
//create the views, then route them, then use ajax calls

let App = React.createClass({
  
  render: function(){
   return (
       <div>
        <NavBar />
        <CommentBox />
       </div>
       );
  }
  
});

ReactDOM.render(<App />, document.getElementById('homeApp'));