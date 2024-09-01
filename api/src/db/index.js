/* eslint-disable no-undef */
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    const connectionInstense = await mongoose.connect(`${DATABASE_URI}`);
    console.log(
      `MongoDB connected !! DB HOST :${connectionInstense.connection.name}`
    );
  } catch (error) {
    console.log("MongoDB Connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
