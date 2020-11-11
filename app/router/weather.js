const {
    getWeather
}=require('../services/weather')

const weatherRoute=[
    {name:'/get-weather',handler:getWeather,method:'POST'}
]

module.exports=weatherRoute