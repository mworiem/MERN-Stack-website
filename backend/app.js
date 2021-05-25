const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();
// npm i express-fileupload
const errorMiddleware = require("./middlewares/errors");

// Setting up config file
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/" });
// dotenv.config({ path: 'backend/config/config.env' })

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Import all routes

const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

//Errors Middleware

app.use(errorMiddleware);

module.exports = app;
