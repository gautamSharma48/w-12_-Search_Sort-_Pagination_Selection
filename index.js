const express = require("express");
const router = require("./router");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const app = express();
const port=process.env.PORT || 8080;
dotenv.config();

const connectDb=()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected with db")).catch(err=>console.log(err))
}


app.use(express.json())
app.use("/",router);

app.listen(port, () => {
    connectDb();
    console.log(`server connected with ${port}`) 
});
