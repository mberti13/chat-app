const express = require('express');
const { createServer } = require('http');
const app = express();
const { Server } = require('socket.io');
const cors = require('cors');

//middleware for cors 
app.use(cors());



const httpServer = createServer();
const io = new Server(httpServer, {
    //TODO: check cors options for socket.io
    cors:{
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
    }
});

io.on('connection', (socket) =>{
    // ...
});

httpServer.listen(3000, () =>{
    console.log("Connected to server on Port 3000")
});
