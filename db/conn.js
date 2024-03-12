// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
// Connect to the database 
const client = mongoose
  .connect('mongodb+srv://root:root@cluster0.lmgb7y0.mongodb.net/mediAppoint?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });
module.exports = client;
