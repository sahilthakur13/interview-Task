const express = require('express')
const {dbconnection} = require('./connect')
const app = express();
const cookie = require('cookie-parser');
const userRouter =  require('./routers/userRouter')
const allUsers = require('./routers/allUsersRouter')

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookie());


app.use('/user',userRouter)
app.use('/',allUsers)

dbconnection('mongodb://127.0.0.1:27017/interview-task1')
app.listen(5000,()=>{
    console.log("server started at port 5000");
})