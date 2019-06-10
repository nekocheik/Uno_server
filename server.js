const http = require('http');
const fs = require('fs');

const server = http.createServer();

// Chargement of socket.io
var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
//     console.log('Un client est connecté !');
// });

io.sockets.on('connection', function (socket) {
    socket.emit('message', 'Vous êtes bien connecté !');

    socket.on('table', function ( data ) {
        socket.emit( 'null', data );
        console.log('emit', 'ok')
    });	
});





server.listen(5050);