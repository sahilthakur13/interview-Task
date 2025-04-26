const jwt = require('jsonwebtoken');
const secretKey= 'sahillllllluuuuu0101001001001101';

async function checkAuth(req,res,next){
        const token  = await req.cookies?.uidToken;
         if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
        const user =  jwt.verify(token,secretKey)
   
          if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user= user
         next();
       }

module.exports={checkAuth};