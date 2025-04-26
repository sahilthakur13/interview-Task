const {getUser} = require('../service/auth')
async function checkAuth(req,res,next){
        const token  = await req.cookies?.uidToken;
         if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
          const user = await  getUser(token)
          if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user= user
         next();
       }

module.exports={checkAuth};