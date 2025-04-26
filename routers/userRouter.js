const express = require('express')
const router = express.Router();
const User = require('../model/user')
const jwt = require('jsonwebtoken');
const secretKey= 'sahillllllluuuuu0101001001001101'

router.post('/signup',async(req,res)=>{
    const{fullName,email,password,role} = req.body;

    const alreadyExist = await User.findOne({email})
    if(alreadyExist) return res.status(400).json({message:"Email already Exists"})

         await User.create({
        fullName,
        email,
        password,
        role,
    })

    res.status(201).json({message:"User registered Successfully"})
});

router.post('/login',async(req,res)=>{
    const{email,password} = req.body;
    
    const loggedUser = await User.findOne({email,password})
    
    if(!loggedUser) return res.json({message:"user doesn't existed"})

      const token = jwt.sign({
            email:loggedUser.email,
            _id: loggedUser._id
        },secretKey)

        res.cookie('uidToken',token)
        res.send('User is logedin')

})







module.exports =router;