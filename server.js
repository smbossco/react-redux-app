const express = require('express'), 
                app = express(), 
                path = require('path'),
                //http = require("http"),
                React = require("react"),
                { renderToString } = require('react-dom/server'),
                { match, RouterContext } = require('react-router');

import routes from './routes/routes.jsx';

//app.use(path.join(__dirname, "public"));

app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is what the `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    if (err) console.error;
    const appHtml = renderToString(<RouterContext {...props}/>);


    res.send(renderPage(appHtml));
  });
});

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>React Router App</title>
    <link rel=stylesheet href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <div id=app>${appHtml}</div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </html>
   `;
}

const PORT = process.env.PORT;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost: ' + PORT);
});