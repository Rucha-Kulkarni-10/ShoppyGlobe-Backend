import Order from "../models/Order.js";

// Place an order
export const placeOrder = async (req, res) => {
  try {
    const { fname, lname, email, address, phone, products, orderTotal, pincode } = req.body;
    const user = req.user;
    const order = new Order({
      userId: user.id,
      firstName: fname,
      lastName: lname,
      email,
      address,
      phone,
      products,
      orderTotal,
      pincode
    });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", success: true, orderId: order._id });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};

// Get all orders for a user
export const getOrders = async (req, res) => {
  try {
    const user = req.user;
    const orders = await Order.find({ userId: user.id });
    if (orders) {
      res.status(200).json({ orders: orders, success: true });
    } else {
      res.status(404).json({ message: "No orders found", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};
