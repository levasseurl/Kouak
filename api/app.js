c
const express = require('express')
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser')
require('dotenv').config();
const { createServer } = require("http");
const { Server } = require("socket.io");

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

// DB Connection
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const port = 3000;

const app = express();
const httpServer = createServer(app);

// Web Socket
const io = new Server(httpServer, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  socket.on("sendMessage", (args) => {
    io.emit("newMessage", args);
  });

  socket.on("registration", (args) => {
    io.emit("newUser", "OK");
  });

  socket.on("login", (args) => {
    io.emit("userLogged", "OK");
  });
});

// Routers
const indexRouter = require('./routes/index');
const messageRouter = require('./routes/message');
const userRouter = require('./routes/user');

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/messages', messageRouter);
app.use('/users', userRouter);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

httpServer.listen(port, () => {
  console.log(`App listening on port ${port}`)
});