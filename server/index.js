const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { Server } = require("socket.io");
const TopicRouter = require("./routes/Topic.routes");

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
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    credentials: true,
    methods: ["GET", "POST"],
  },
});

const TopicRouter = require("./routes/Topic.routes");
const authRouter = require("./routes/auth.routes.js");
// const roomRouter = require("./");
const User = require("./model/user.model.js");
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("Hello!");
});
app.use("/topic", TopicRouter);
app.use("/auth", authRouter);
// app.use("/room", roomRouter);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

app.use("/topic", TopicRouter);

io.on("connect", (socket) => {
  socket.on("join", async ({ name, room }) => {
    const user = await User.findOne({ username: name });
    console.log("user: ", user);

    socket.join(room);

    socket.emit("message", {
      user: "admin",
      text: `${user.username}, welcome to room ${room}.`,
    });

    socket.broadcast
      .to(room)
      .emit("message", { user: "admin", text: `${user.username} has joined!` });

    io.to(room).emit("roomData", {
      room: room,
      users: getUsersInRoom(room),
    });
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

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

require("./config/database");
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`listening on :${PORT}`);
});
