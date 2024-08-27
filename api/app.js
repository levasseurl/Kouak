const express = require('express')
const { Sequelize } = require('sequelize');


const app = express()
const port = 3000
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})