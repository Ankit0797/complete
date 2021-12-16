const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    EmpID : {
        type:String,
        required:true,
        unique:true
    },
    Password : {
        type:String,
        required:true,
        unique:true
    }
})


const Register = new mongoose.model("Register", loginSchema);

module.exports = Register;