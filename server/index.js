const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const PORT = 3002;
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // React app's url
  },
});
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("join-room", (data) => {
    socket.join(data.room);
    console.log(`the user ${data.username} joind ${data.room} `);
  });

  socket.on("send-message", (data) => {
    socket.broadcast.to(data.room).emit("recieve-message", data);
  });
});
server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
