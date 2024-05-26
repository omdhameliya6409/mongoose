const mongoose= require('mongoose')

const connectdb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/student")
    console.log("connected to mogodb");
}
module.exports=connectdb;   