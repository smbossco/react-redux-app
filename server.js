const express = require('express'), 
                app = express(), 
                path = require('path'),
                port = 8000,
                http = require("http");
             //   reload = require("reload");


//app.use("./routes/routes.jsx");
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