const mongo = require('mongoose');

const userSchema = mongo.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user",
    }
})
module.exports = mongo.model('User',userSchema);