const request=require('request')
const mongoose=require('mongoose')
const express=require('express')
const app=express()
const User=require('./app/model/user')

mongoose.connect('mongodb+srv://deyo:12345@cluster0.ui0gi.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(e=> console.log("Database connected"))
.catch(e=> console.log('Connect to database error'))


app.post('/get-weather',async(req,res)=>{
   if(req.query.location){
        const API_URL=`http://api.weatherstack.com/current?access_key=93866f791be72b48b9fda8db6aa82430&query=${req.query.location}`
        request(API_URL,(err,respc,body)=>{
             const data=JSON.parse(body)
             res.send(data)
        })
        
   }else{
        res.send({err:'Place not found'}) 
   }
})

app.listen(3000)