import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/bookstore_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to Mongo"));

db.once('open', function(){
    console.log('Connected to MongoDB');
});

export default db;