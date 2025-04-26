const mongo = require('mongoose');
const User = require('../model/user')

mongo.connect('mongodb://127.0.0.1:27017/interview-task1')
.then(
    async()=>{
        console.log("mongodb is connected");
        await User.create({
            fullName:"rohan",
            email:"rohan@gmail.com",
            password:"rohan",
            role:"admin"
        })
        console.log('Admin is created')
        process.exit();
    }
   
)
.catch((error)=>{
    console.log(error);
})