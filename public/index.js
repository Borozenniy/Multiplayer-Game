//const socket = io('ws://localhost:5000');
const socket = io();

socket.on("connect", () => {
  console.log("Connected to server")
})