const express = require('express');
const router = express.Router();
const User = require('../model/user');
const {checkAuth} = require('../middleware/auth')

router.get('/allusers',checkAuth,async(req,res)=>{
        const{email}  = req.body;
      const user = await User.findOne({email}).populate('role');
    if(user.role !== 'admin'){
        return res.status(403).json({ message: "Access Denied: Only Admin can access this route." });
    }
    const allusers =  await User.find({});
    res.status(200).send(allusers);
})

module.exports = router;
