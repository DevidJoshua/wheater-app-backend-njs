const mongoose=require('mongoose')

const model_user=new mongoose.Schema({
    name:String,
    password:String,
    lat:String,
    long:String,
})
module.exports=mongoose.model('user',model_user)
