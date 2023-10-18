
const mongoose = require("mongoose");

exports.dbConnect = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/studentsDb");
        console.log("database is connected");
    }catch(error){
        console.log(error);
        console.log("not connected database");
        process.exit(1);
    }
}


