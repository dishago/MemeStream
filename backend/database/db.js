/**
 * db provides the MongoDB URI needed for connecting the backend server to a cloud Mongo database (Atlas).
 * In case URI is not provided as an environment variable, the local version of MongoDB is usedand a database named 'Xmeme' is created.
 */
module.exports = {
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/Xmeme'
  };