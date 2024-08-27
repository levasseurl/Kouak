const express = require('express')
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser')

const app = express()

const port = 3000
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

app.use(bodyParser.json());

// Routers
const indexRouter = require('./routes/index');
const messageRouter = require('./routes/message');
const userRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/messages', messageRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})