// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Environment variable configuration
require("dotenv").config();

const db = require("./config/mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route for product operations
app.use("/products", require("./routes/product.routes"));

// Start the server
app.listen(port, () => {
  console.log(`API is live on http://localhost:${port}/products`);
});
