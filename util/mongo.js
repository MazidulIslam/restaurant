import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;
debugger;
if (!MONGO_URL) {
  debugger;
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  debugger;
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    debugger;
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
