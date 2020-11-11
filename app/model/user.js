const mongoose=require('mongoose')

const model_user=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    lat:String,
    long:String,
})
module.exports=mongoose.model('user',model_user)
