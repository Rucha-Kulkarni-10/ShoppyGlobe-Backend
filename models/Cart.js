import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: Object, required: true },
  quantity: { type: Number, required: true }
});

const Cart = mongoose.model("CartItem", cartItemSchema);

export default Cart;
