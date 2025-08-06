const orderModel = require("../models/orderModel");

// create order /api/v1/order
exports.createOrder = async (req, res, next) => {
  try {
    const cartItems = req.body;
    const amount = Number(
      cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
    ).toFixed(2);

    const status = "pending";

    const order = await orderModel.create({ cartItems, amount, status });
    console.log("Order amount:", amount);
    res.json({
      success: true,
      order: order,
    });
  } catch (error) {
    console.error("Order creation failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while creating order",
    });
  }
};
