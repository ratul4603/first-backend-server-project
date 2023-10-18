
require("dotenv").config();
const app = require("./app");
const {dbConnect} = require("./config/config");
const port = process.env.PORT || 3000;



app.listen(port, async ()=>{
    await dbConnect();
    console.log(`Server is running at http://127.0.0.1:${port}`);
})