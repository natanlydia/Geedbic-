import mongoose from "mongoose";

let cachedConnection: typeof mongoose | null = null;
let cachedPromise: Promise<typeof mongoose> | null = null;

export async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("Please define MONGO_URI in your environment variables.");
  }

  if (cachedConnection) return cachedConnection;

  if (!cachedPromise) {
    cachedPromise = mongoose.connect(mongoUri, {
      dbName: process.env.MONGODB_DB || "geedbic",
    });
  }

  cachedConnection = await cachedPromise;
  return cachedConnection;
}
