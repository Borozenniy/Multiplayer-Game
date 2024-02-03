const express = require('express')
const app = express()

const path = require('path');

const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

//* Socket IO
const { createServer } = require('http');
const { Server } = require('socket.io');

//? create a server
const httpServer = createServer(app);
const io = new Server(httpServer> {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"]
  }
})


io.on('connect', (socket) => {
  console.log('socket: ', socket)
  console.log('User connected: ', socket.id);
})

// ? Server static file
app.use(express.static('static-page'));

const port = process.env.PORT || 5000
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})