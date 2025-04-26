const jwt = require('jsonwebtoken');
const secretKey= 'sahillllllluuuuu0101001001001101';

async function getUser(token){
    try {
       const decoded= jwt.verify(token,secretKey)
       return decoded;
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    getUser
}