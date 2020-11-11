const request=require('request')
const getWeather = (req,res)=>{
   if(req.query.location){
        const API_URL=`http://api.weatherstack.com/current?access_key=93866f791be72b48b9fda8db6aa82430&query=${req.body.location}`
        
        request(API_URL,(err,respc,body)=>{
             const data=JSON.parse(body)
             res.send(data)
        })

   }else{
        res.send({err:'Place not found'}) 
   }
}

module.exports = {
    getWeather
}