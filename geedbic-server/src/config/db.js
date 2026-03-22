const mongoose = require("mongoose");

let cachedConnection = null;
let cachedPromise = null;

async function connectToDatabase() {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error(
      "Please define either MONGODB_URI or MONGO_URI in your environment variables.",
    );
  }

  if (cachedConnection) {
    return cachedConnection;
  }

  if (!cachedPromise) {
    cachedPromise = mongoose.connect(mongoUri, {
      dbName: process.env.MONGODB_DB || "geedbic",
    });
  }

  cachedConnection = await cachedPromise;
  return cachedConnection;
}

module.exports = { connectToDatabase };
