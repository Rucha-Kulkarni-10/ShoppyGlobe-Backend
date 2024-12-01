import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in the environment variables.");
        }

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process if connection fails
    }
};


// code to test database connectivity
// if (import.meta.url === new URL(import.meta.url).href) {
//     connectDB().then(() => {
//         console.log("Connection test successful.");
//         process.exit(0);
//     }).catch((error) => {
//         console.error("Connection test failed:", error);
//         process.exit(1);
//     });
// }


export default connectDB;
