import express from "express";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import { placeOrder, getOrders } from "../controllers/orderController.js";

const orderRoutes = express.Router();

orderRoutes.post("/", tokenValidation, placeOrder);
orderRoutes.get("/", tokenValidation, getOrders);

export default orderRoutes;
