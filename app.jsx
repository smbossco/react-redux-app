"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, Link, IndexRoute } from "react-router";
import CommentBox from "./routes/CommentBox.jsx";
import Text from "./routes/Text.jsx";
import NavBar from "./routes/App_Nav.jsx";

export default class App extends React.Component {
  
  render (){
   return (
       <div>
        <NavBar action={"render"} name={"Menu"} />
        <Text />
       </div>
       );
  }
  
};
