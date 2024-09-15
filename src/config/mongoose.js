const mongoose = require('mongoose');

let database;
async function connectToDatabase() {
  await mongoose.connect(process.env.MONGODB_URL);
  database = mongoose.connection;
}

function getDb() {
  if (!database) {
    throw { message: 'Database not connected!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
