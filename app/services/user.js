const User=require('../model/user')

const createUser = async(req,res) =>{
    const user = await new User(req.body)
    await user.save().then((user)=>{
        res.send(user);
    }).catch((e)=>{
        res.status(400).send(e.message);
    })
}

const getUserSingle = async(req,res) =>{
    try{
        const user = await User.findOne(req.body)
        res.send(user)
    }catch(err){
        res.status(400).send(err)
    }
    
}

const getUserMany = async(req,res) =>{ 
    try{
        const userlist = await User.find(req.body)
        res.send(userlist)
    }catch(err){
        res.status(400),send(err)
    }
}

const updateOneUser = async(req,res) =>{
    try{
        const user = await User.findOneAndUpdate({_id:req.body.id},req.body.data)
        res.send(user)
    }catch(err){
        res.status(400).send(err.message)
    } 
}

const deleteOneUser = async(req,res) =>{
    try{
        const user = await User.deleteOne({_id:req.body.id})
        res.send(user)
    }catch(err){
        res.status(400).send(err.message)
    }  
}


module.exports = {
    createUser,
    getUserMany,
    getUserSingle,
    updateOneUser,
    deleteOneUser
}