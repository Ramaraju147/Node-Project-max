const express=require('express');
const path=require('path');

const app=express();

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.use(express.static(path.join(__dirname,'public')))



app.use(indexRouter)
app.use(userRouter)

app.listen(3001)