const express = require('express');
//* Socket.io
const { createServer } = require('http');
const { Server } = require('socket.io');


const app = express();

const httpServer = createServer(app);

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const io = new Server(httpServer);

//? listen for events
io.on('connect', (socket) => {
  console.log("user connected: ", socket.id);
});






app.use(express.static("public"))

//const port = process.env.PORT || 5000;
const port = process.env.PORT || 5000;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
//app.listen(port, () => {
//  console.log(`Server is running on port ${port}`)
//}) 