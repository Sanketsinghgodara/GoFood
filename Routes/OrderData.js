const express = require("express");
const Order = require("../models/Order");
const router = express.Router();
 

router.post("/orderData", async (req, res) => {
  try {
    let data = req.body.order_data;
    let orderDate = req.body.order_date;
    let email = req.body.email;

    data.unshift({ Order_date: orderDate });

    let existingOrder = await Order.findOne({ email });

    if (!existingOrder) {
      await Order.create({
        email,
        order_data: [data],
      });
    } else {
      await Order.findOneAndUpdate({ email }, { $push: { order_data: data } });
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
