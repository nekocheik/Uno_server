const http = require('http');
const fs = require('fs');

const server = http.createServer();

// Chargement of socket.io
var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
//     console.log('Un client est connecté !');
// });


const Partie = [];
let game = [] ;
io.sockets.on('connection', function ( socket ) {

    socket.on( 'playerStart',  function ( data , theGame ) {
        if ( Partie.length === 0 ) {
            console.log('ok')
            Partie.push(data);
            game = theGame;
            socket.emit('owner' , true  );
        }else{
            socket.emit( 'getPartie' , Partie , game );
        }
    });

});





server.listen(5050);