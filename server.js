const express = require('express')
const cors = require('cors');
const app = express()
const env = require("dotenv");
env.config({ path: "./config/.env" })
const PORT = process.env.PORT
const db = require('./config/db');
const product = require('./routers/product-router')
const user = require("./routers/user-router")


db()

app.use(cors());
app.use(express.json())

app.use("/api/products", product)
app.use("/api/user", user)

app.listen(PORT || 5000, () => console.log(`http://localhost:${PORT || 5000}`))