const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Shadow:Shadow@cluster0.ugjdeh0.mongodb.net/";

async function connectDB() {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;
