// Express
const express = require('express');
const socket = require('socket.io');
var app = express(); // express app

// Socket 
//var http = require('http').createServer(app);


// setup ejs template 
app.set('view engine', 'ejs');

// setup static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});


// listening to server
var server = app.listen(4000, function() {
    console.log('You are listening to port 4000');
});

var io = socket(server);

io.on('connection', (socket) => {

    console.log('Made socket connection: ', socket.id);

    //Handle Play event
    socket.on('play', (data) => {
        io.sockets.emit('play', data.play);
    });

    socket.on('pause', (data) => {
        io.sockets.emit('pause', data.pause);
    });

});