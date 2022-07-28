const express = require("express");
const app = express();
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const server = http.createServer(app);
const { Server } = require("socket.io");
const TopicRouter = require("./routes/Topic.routes");
const io = new Server(server);

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

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.use('/',TopicRouter)

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
