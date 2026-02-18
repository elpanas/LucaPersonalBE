const mongoose = require("mongoose");
const config = require("../config/config");

const {
  db: { uri, options },
} = config;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, options)
      .then((mongoose) => {
        console.log("Connected to MongoDB...");
        return mongoose;
      })
      .catch((err) => {
        console.error("Could not connect to MongoDB...", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = dbConnect;
