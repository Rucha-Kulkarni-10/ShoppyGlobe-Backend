import Cart from "../models/Cart.js";

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    const cartItem = new Cart({ product, quantity, userId: req.user.id });
    await cartItem.save();
    res.status(201).json({ message: "Product added to cart", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};

// Update cart item quantity
export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedItem = await Cart.findByIdAndUpdate(req.params.itemId, { quantity }, { new: true });
    if (updatedItem) {
      res.status(200).json({ message: "Cart item updated", success: true, item: updatedItem });
    } else {
      res.status(404).json({ message: "Cart item not found", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};

// Delete cart item
export const deleteCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.itemId);
    res.status(200).json({ message: "Cart item deleted", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};
