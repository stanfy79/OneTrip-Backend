import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is missing from environment variables");
    }

    // Simplified for modern Mongoose versions
    const conn = await mongoose.connect(process.env.MONGO_URL);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (e) {
    console.error("Failed to connect to database:", e.message);
    process.exit(1); // Shuts down the server if connection fails
  }
};

export default connectDB;