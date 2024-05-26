const express = require ('express');
const connectdb = require('./db');
const student = require('./student');


const app = express();
app.use(express.json());

app.get ("/",async(req,res)=>{
    
    let base =await student.find()
    res.send(base)
});

app.post ("/",async(req,res)=>{
    
    let data = await student.create(req.body);
    res.send(data)
    
});

app.listen(8090,()=>{
    console.log("listening on port 8090");
    connectdb()
});