// Import required modules
const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { versionKey: false } // Disable the version key
);

// Export Product model
module.exports = mongoose.model("Product", productSchema);
