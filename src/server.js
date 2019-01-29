const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const hostname = '0.0.0.0';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat', function (data) {
        io.emit('chat', data);
    });
});
