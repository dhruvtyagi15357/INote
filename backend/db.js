const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

async function connectDB() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectDB;