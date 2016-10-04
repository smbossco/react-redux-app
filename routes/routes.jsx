import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app.jsx';
import NavBar from './App_Nav.jsx';
import CommentBox from './CommentBox.jsx';
//import Repo from './Repo';
import Users from './Users.jsx';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={NavBar}/>
    <Route path="/repos" component={CommentBox}>
      {/*<Route path="/repos/:userName/:repoName" component={Repo}/>*/}
    </Route>
    <Route path="/about" component={Users}/>
  </Route>
);