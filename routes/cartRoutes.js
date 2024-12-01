import express from "express";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import { addToCart, updateCartItem, deleteCartItem } from "../controllers/cartController.js";

const cartRoutes = express.Router();

cartRoutes.post("/", tokenValidation, addToCart);
cartRoutes.put("/:itemId", tokenValidation, updateCartItem);
cartRoutes.delete("/:itemId", tokenValidation, deleteCartItem);

export default cartRoutes;
