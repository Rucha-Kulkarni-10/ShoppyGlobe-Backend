import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  products: [{ type: Object, required: true }],
  orderTotal: { type: Number, required: true },
  pincode: { type: String, required: true }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
