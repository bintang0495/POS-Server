const mongoose = require('mongoose');
// const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../app/config');
const { dbPass, dbName, dbUser } = require('../app/config');

// mongoose.connect(
//   `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
// );

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@possys.7dkl9.mongodb.net/${dbName}?retryWrites=true&w=majority`
);

const db = mongoose.connection;

module.exports = db;
