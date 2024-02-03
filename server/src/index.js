const express = require('express');
const app = express();

const path = require('path');

//* add dotenv and config.env
const dotenv = require('dotenv');
//? add path to config.env
dotenv.config({path: './config.env'})


//* Socket.io
const { createServer } = require('http');
const { Server } = require('socket.io');

//? create http server
const httpServer = createServer(app)
//? listener will be on httpServer
const io = new Server(httpServer, {
  //
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on('connect', (socket) => {
console.log("user connected: ", socket.id);
});

//io.on('connect', (socket) => {
//  console.log("socket: ", socket);
//});
/*
* Для использования статических файлов

const clientPath = path.join(__dirname, "../public");
app.use(express.static(''));
*/


const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
  console.log(`Server with socket is running on port ${port}`)
})

//app.listen(port, () => {
//  console.log(`Server is running on port ${port}`);
//})
