const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");



require("dotenv").config({ path: "config/config.env" })
app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// importing Routes
const order = require("./routes/order.js")
const user = require("./routes/user.js")

// usign Routes
app.use("/api/v1",order)
app.use("/api/v1",user)


module.exports = app