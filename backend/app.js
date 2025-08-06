const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/connectDatabase");

// Load environment variable from config/config.env
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const orders = require("./routes/order");

// Db connect
connectDatabase();

app.use(express.json());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} under ${process.env.NODE_ENV} mode`);
});
