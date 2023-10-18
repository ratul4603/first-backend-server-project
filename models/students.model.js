
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "student name must be included"]
    },
    age:{
        type:Number,
        required: [true, "student age must be included"]
    },
    group:{
        type:String,
        required: [true, "student group name must be included"]
    },
    email:{
        type:String,
        required: [true, "student email must be included"]
    },
    password:{
        type:String,
        required: [true, "student password must be included"]
    },
    image:{
        type:String,
        required: [true, "student photo must be included"]
    }
})

exports.Student = mongoose.model("students", studentSchema);
