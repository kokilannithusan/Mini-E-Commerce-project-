const orderModel = require("../models/orderModel");

// create order /api/v1/order
exports.createrOrder = async (req, res, next) => {
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  ).toFixed(2);

  const status = "pending";

  const order = await orderModel.create({ cartItems, amount, status });

  console.log(amount);
  //
  res.json({
    sucess: true,
    order: order,
  });
};
