const express = require("express");
const router = express.Router();
const { createrOrder } = require("../controllers/orderController");

router.route("/order").post(createrOrder);
module.exports = router;
