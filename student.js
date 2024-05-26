const mongoose= require('mongoose')

let studentschema = new mongoose.Schema({
    name:String,
    Number: Number,
    cours: String
})

const student = mongoose.model("studentdata",studentschema)

module.exports=student;