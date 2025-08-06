const mongoose = require("mongoose");

// define model and data type
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  rating: String,
  images: [
    {
      image: String,
    },
  ],
  category: String,
  seller: String,
  stock: String,
  numOfReviews: String,
  createdAt: Date,
});

// Model name should be singular
const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
