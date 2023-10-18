
const cors = require("cors");
const express = require("express");
const app = express();
const studentsRoute = require("./routes/students.route");


app.use(cors());
app.use(express.static("views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/students", studentsRoute);


app.get("/", (req, res)=>{
    res.status(200).sendFile(__dirname + "/views/html/index.html")
})
app.use((req, res, next)=>{
    res.status(404).send({
        message: "route not found!"
    })
})
app.use((err, req, res, next)=>{
    res.status(500).send({
        message: "something broke!"
    })
})

module.exports = app;