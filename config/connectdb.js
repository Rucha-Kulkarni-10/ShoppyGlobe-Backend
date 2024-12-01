import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectDB;
