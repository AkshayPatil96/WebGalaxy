// const express = require("express");
// const app = express();
// const http = require("http");
// const morgan = require("morgan");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server,{
//   cors:{
//     origin: 'https://localhost:3000',
//   }
// });

// dotenv.config();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(morgan("dev"));
// app.use(cookieParser());
// dotenv.config();
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "http://localhost:3001",
//       "http://localhost:3002",
//     ],
//     credentials: true,
//   })
// );

// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

// app.use(async (req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 404;
//   next(error);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     error: {
//       status: err.status || 500,
//       message: err.message,
//     },
//   });
// });

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const userOps = require("./utils/user.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    credentials: true,
  })
);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join", ({ name, room }) => {
    console.log(room, name);
    const { error, user } = userOps.addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = userOps.getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("User left!");
  });
});

require("./config/database");
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`listening on :${PORT}`);
});
