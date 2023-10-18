
const path = require("path");
const { Student } = require("../models/students.model");


exports.studentsController = (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/html/students.html"));
}
exports.studentsLoginController = (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/html/students.allinfo.html"));
}
exports.studentsSignupController = (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/html/students.signup.html"));
}

exports.studentsSignupInfoController = async (req, res)=>{
    try {
        const newStudent = new Student({
            name: req.body.name,
            age: Number(req.body.age),
            group: req.body.group,
            email: req.body.email,
            password: req.body.password,
            image: req.file?.filename
        })
        const newStdData = await newStudent.save();
        res.status(201).send({
            success:true,
            message: "single student data",
            student: newStdData
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

exports.singleStdInfoController = (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/html/singlestd.html"));
}
exports.showInfo = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const findStd = await Student.findOne({$and:[{email: {$eq : email}},{password: {$eq: password}}]});
        if(findStd){
            res.status(200).send({
                scusses:true,
                message: "single student information",
                student: findStd
            })
        }else{
            res.status(404).send({
                scusses: false,
                message: "coluld not found"
            })
        }
    }catch(error){
        res.status(500).send({
            message: error.message
        })  
    }
}

exports.showInfoAll = async (req, res)=>{
    try{
        const allFindStd = await Student.find().select({password:0,email:0});
        if(allFindStd.length >= 1){
            res.status(200).send({
                scusses:true,
                message: "all student information",
                allStudents: allFindStd
            })
        }else{
            res.status(404).send({
                scusses: false,
                message: "coluld not found"
            })
        }
    }catch(error){
        res.status(500).send({
            message: error.message
        })  
    }
}

exports.singleStdDeleteControllerShow = (req, res)=>{
    res.status(201).sendFile(path.join(__dirname + "/../views/html/deletestdnt.html"));
}
exports.singleStdDeleteController = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const deleteStd = await Student.deleteOne({$and:[{email: {$eq : email}},{password: {$eq: password}}]});
        if(deleteStd){
            res.status(200).send({
                scusses:true,
                message: "deleted successfully!"
            })
        }else{
            res.status(404).send({
                scusses: false,
                message: "coluld not found"
            })
        }
    }catch(error){
        res.status(500).send({
            message: error.message
        })  
    }
}

exports.stdCnfrmIdControllerShow = (req, res)=>{
    res.status(201).sendFile(path.join(__dirname + "/../views/html/updatestd.html"));
}
exports.stdCnfrmIdController = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const findStd = await Student.findOne({$and:[{email: {$eq : email}},{password: {$eq: password}}]});
        if(findStd){
            res.status(200).sendFile(path.join(__dirname + "/../views/html/updateinfo.html"))
        }else{
            res.status(404).send({
                scusses: false,
                message: "coluld not found"
            })
        }
    }catch(error){
        res.status(500).send({
            message: error.message
        })  
    }
}

exports.updateInfoController = async (req, res)=>{
    try{
        const fileName = req.file?.filename;
        const {email, password, name, age, group} = req.body;
        const updateStd = await Student.updateOne({email:email},{$set:{name:name,age:Number(age),group:group,email:email,password:password, image: fileName}});
        if(updateStd){
            res.status(200).send({
                success:true,
                message: "updated successfully"
            })
        }else{
            res.status(404).send({
                scusses: false,
                message: "coluld not found"
            })
        }
    }catch(error){
        res.status(500).send({
            message: error.message
        })  
    }
}