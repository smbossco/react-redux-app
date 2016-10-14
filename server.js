const express = require('express'), 
                app = express(), 
                path = require('path'),
                //http = require("http"),
                React = require("react"),
                { renderToString } = require('react-dom/server'),
                { match, RouterContext } = require('react-router'),
                routes = require('./routes/routes.jsx');

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

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml));
  });
});

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `;
}

const PORT = process.env.PORT;

app.listen(PORT, function() {
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