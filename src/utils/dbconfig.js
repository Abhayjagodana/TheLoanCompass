// import mongoose from "mongoose";

// let isConnected = false;

// export const connect = async () => {
//   if (isConnected) {
//     console.log("Already connected to MongoDB");
//     return;
//   }
//    if (!process.env.MONGO_URI) {
//         throw new Error("Please define the MONGO_URI environment variable inside .env.local");
//     }

//   try {
// await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// };

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // Add your MongoDB Atlas URI in .env

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;

