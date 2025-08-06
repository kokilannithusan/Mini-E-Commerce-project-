const productModel = require("../models/productModel");

// Get Product API - api/v1/products
exports.getProducts = async (req, res, next) => {
  try {
    // If a keyword is provided, filter products by name
    // Otherwise, return all products
    const query = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    // Find products based on the query
    const products = await productModel.find(query);
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
    // Find a single product by ID
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
