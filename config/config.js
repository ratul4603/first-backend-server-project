
require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URL || "mongodb://127.0.0.1:27017/studentsDb";

exports.dbConnect = async () =>{
    try{
        await mongoose.connect(url);
        console.log("database is connected");
    }catch(error){
        console.log(error);
        console.log("not connected database");
        process.exit(1);
    }
}


