var http = require('http');
var express = require('express');
var port = 9090;

// setup application
var apllication = express();

// server start
http
    .createServer(application)
    .on(listening, function(){
        console.log('http server running on ' + port);
    })
    .on('error', function(){
        console.error(error);
    })
    .listen(port);