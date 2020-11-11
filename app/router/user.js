const {
    createUser,
    getUserMany,
    getUserSingle,
    updateOneUser,
    deleteOneUser
}=require('../services/user')

const userRoute=[
    {name:'/create-user',handler:createUser,method:'POST'},
    {name:'/get-user-one',handler:getUserSingle,method:'GET'},
    {name:'/get-user-many',handler:getUserMany,method:'GET'},
    {name:'/update-one-user',handler:updateOneUser,method:'POST'},
    {name:'/delete-one-user',handler:deleteOneUser,method:'POST'}
]

module.exports=userRoute