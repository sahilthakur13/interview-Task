const mongoose = require('mongoose')

async function dbconnection(url){
    return mongoose.connect(url)
    .then(()=>{
        console.log('mongodb is connected')
    })
    .catch((error)=>{console.log(error);})
}

module.exports = {dbconnection};