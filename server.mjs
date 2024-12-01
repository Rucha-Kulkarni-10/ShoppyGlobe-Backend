import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";

// Import Routes
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// Connect DB
import { connectDB } from "./config/connectdb.js";

// Initialize app
const app = express();

// Connect to DB
connectDB();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

// Start server
app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
