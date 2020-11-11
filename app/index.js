const createError = require('http-errors')
const express=require('express')
const app=express()
const dbname='weather-app'
const router=require('./router/index')
const mongoose=require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//COONECT DATABASE
mongoose.connect(`mongodb+srv://deyo:12345@cluster0.ui0gi.mongodb.net/${dbname}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(e=> console.log("Database connected "))
.catch(e=> console.log('Connect to database error'+e))

//ROUTER
router.map((r,i)=>{
    r.map((s,j)=>{
        switch(s.method){
            case 'POST':
                    app.post(s.name,(req,res)=>{
                        s.handler(req,res)
                    })
                break;
            case 'GET':
                    app.get(s.name,(req,res)=>{
                        s.handler(req,res)
                    })
            break;
        }   
    })
})


app.use((req,res,next)=>{
    next(createError(404))
})

app.listen(3000)