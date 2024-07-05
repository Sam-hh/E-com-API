// Import required modules
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/product.controller");

// Define routes for product operations
router.get("/", productsController.products);
router.post("/create", productsController.create);
router.delete("/:productID", productsController.delete);
router.post("/:productID/update_quantity", productsController.updateQuantity);

// Export mongoose connection
module.exports = router;
