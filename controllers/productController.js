import Product from "../models/Product.js";

// Fetch all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};

// Fetch product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(404).json({ message: "Product not found", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};
