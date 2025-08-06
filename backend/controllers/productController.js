const productModel = require("../models/productModel");

// Get Product API - api/v1/products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching products" });
  }
};

// Get Product API - api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await productModel.findById(req.params.id);
    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found with that ID",
      });
    }
    res.json({
      success: true,
      singleProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving product",
    });
  }
};
