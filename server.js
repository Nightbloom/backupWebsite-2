const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
const env = require("dotenv");
env.config({ path: "./config/.env" })
const PORT = process.env.PORT
const db = require('./config/db');
const product = require('./routers/product-router')
const user = require("./routers/user-router")
const Razorpay = require('razorpay');


db()

app.use(cors());
app.use(express.json({ extended: false }))

app.use("/api/products", product)
app.use("/api/user", user)

// This is were the checkout/payment starts

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('mongodb connected');
  });
  


const OrderSchema = mongoose.Schema({
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
});
const Order = mongoose.model('Order', OrderSchema);

app.get('/get-razorpay-key', (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
});

app.post('/create-order', async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: 'INR',
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send('Some error occured');
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/pay-order', async (req, res) => {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body;
    const newOrder = Order({
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newOrder.save();
    res.send({
      msg: 'Payment was successfull',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/list-orders', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

//ends 

app.listen(PORT || 5000, () => console.log(`http://localhost:${PORT || 5000}`))