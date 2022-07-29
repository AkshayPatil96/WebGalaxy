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
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { Server } = require("socket.io");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/user.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

const TopicRouter = require("./routes/Topic.routes");

app.use("/topic", TopicRouter);

app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
dotenv.config();
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

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    console.log("name: ", name);
    console.log("room: ", room);
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log("user: ", user);
    console.log("message: ", message);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

app.use(async (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

require("./config/database");
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`listening on :${PORT}`);
});
