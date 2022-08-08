const express = require('express');
const { createServer } = require('http');
const app = express();
const { Server } = require('socket.io');
const cors = require('cors');
const { Socket } = require('dgram');

//middleware for cors 
app.use(cors());



const httpServer = createServer();
const io = new Server(httpServer, {
    //TODO: check cors options for socket.io
    cors:{
        // Front end origin
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
    }
});

//listens for emit/listen events in socket.io
io.on('connection', (socket) =>{
    // Measure how many user's are connected in console
    console.log(`User connected: ${socket.id}`)

    // TODO: Look into room logic for private chats
    // socket.on('join-room', (data) =>{
    //     socket.join(data);
    // });

    socket.on("send-message", (data) =>{
        // socket.broadcast.emit("receive-message", data)
        socket.to(data.room).emit("receive-message", data);
    });
});



httpServer.listen(3001, () =>{
    console.log("Connected to server on Port 3000")
});
