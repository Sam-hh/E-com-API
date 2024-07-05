// Import required modules
const mongoose = require("mongoose");

// Environment variable configuration
require("dotenv").config();

const url = process.env.DB_URL;

// Checks if the MongoDB URL is defined
if (!url) {
  console.error("MongoDB URL is not defined in the environment variables");
  process.exit(1);
}

// Connect to MongoDB and handle connection events
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB database", error);
    process.exit(1);
  });

// Export mongoose connection
module.exports = mongoose.connection;
