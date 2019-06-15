const http = require('http');
const fs = require('fs');

const server = http.createServer();

// Chargement of socket.io
var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
//     console.log('Un client est connecté !');
// });


const Partie = [];
io.sockets.on('connection', function ( socket ) {

    socket.on( 'playerStart',  function ( data ) {
        if ( Partie.length === 0 ) {
            Partie.push(data);
            socket.emit('owner' , true  );
            console.log('ok')
        }else{
            socket.emit( 'getPartie' , data );
        }
    });

});





server.listen(5050);