const mongoose = require("mongoose");
const dotenv = require("dotenv");

// require("dotenv").config({
//   path: path.resolve(__dirname, "../config/config.env"),
// });
// console.log(
//   "here...",
//   path.resolve(__dirname, "../config/config.env"),
//   process.env.DB_URL
// );
const connectDatabase = () => {
  mongoose
    // .connect(process.env.DB_LOCAL_URI, {
    // .connect(process.env.DB_URL, {
    .connect(
      "mongodb+srv://Pello:pello@254@iduka.vphpw.mongodb.net/iDuka?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    });
};
module.exports = connectDatabase;
