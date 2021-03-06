var os = require('os');  
var app = require('express')()
   , server = require('http').createServer(app)
   , io = require('socket.io').listen(8082)

var MongoClient = require('mongodb').MongoClient  
    , format = require('util').format;  
   
var express = require('express');

io.set('log level', 1); 
server.listen(8081);

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');


var os=require('os');
var ifaces=os.networkInterfaces();

urls = "http://" + ifaces['eth0'][0].address + ":8082";

/*
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();
});
*/

require('./contorller/index.js')(app);

app.get('/', function (req, res) {
    res.render('index', {
            title: "EJS example",
            header: "Some users"
          });
});

app.get('/monitor', function (req, res) {
    res.render('monitor', {
		url:urls,
         });
});

io.sockets.on('connection', function (socket) {
	console.log('connection');
	socket.on('message', function (msg) {
		console.log(msg['my']);
		socket.broadcast.emit('news', msg['my']);
	});
	socket.broadcast.emit('user connected');
});

