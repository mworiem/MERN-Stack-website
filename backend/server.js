const app = require("./app");
const connectDatabase = require("./config/database");

// const mongoose = require("mongoose");
const path = require("path");

const dotenv = require("dotenv");
// const cloudinary = require("cloudinary");

//Handle Uncaught exceptions - Always at the top

process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log(`Shutting down due to uncaught exception`);
  process.env(1);
});

//Setting up config file

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });
// Development
// dotenv.config({ path: "backend/config/config.env" });

//Connecting to DB

connectDatabase();

//setting up cloudinary config

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//Handle unhandled Promise Rejection -Always at the end

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log(`Shutting down the server due to Unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
