// Import required modules
const Product = require("../models/product.model");

module.exports = {
  // Fetch all products
  products: async (req, res) => {
    try {
      const foundProducts = await Product.find({});
      res.status(200).json(foundProducts);
    } catch (err) {
      res.status(500).json({ error: "Error fetching products", details: err });
    }
  },

  // Create a new product
  create: async (req, res) => {
    try {
      const { name, quantity } = req.body;
      const newProduct = new Product({ name, quantity });
      await newProduct.save();
      res.status(201).json({
        message: "New product added successfully",
        product: newProduct,
      });
    } catch (err) {
      res.status(500).json({ error: "Error adding product", details: err });
    }
  },

  // Delete a product by ID
  delete: async (req, res) => {
    try {
      await Product.deleteOne({ _id: req.params.productID });
      res.status(200).json({ message: "Product deleted" });
    } catch (err) {
      res.status(500).json({ error: "Error deleting product", details: err });
    }
  },

  // Update the quantity of a product
  updateQuantity: async (req, res) => {
    try {
      const { productID } = req.params;
      const { number } = req.query;

      const found = await Product.findById(productID);
      if (!found) {
        return res.status(404).json({ error: "Product not found" });
      }

      const newQty = parseInt(found.quantity) + parseInt(number);
      if (isNaN(newQty) || newQty < 0) {
        return res.status(400).json({ error: "Invalid quantity" });
      }

      found.quantity = newQty;
      const updatedProduct = await found.save();
      res.status(200).json({
        product: updatedProduct,
        message: "Updated successfully",
      });
    } catch (err) {
      res.status(500).json({ error: "Error updating product", details: err });
    }
  },
};
