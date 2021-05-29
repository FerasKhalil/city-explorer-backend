'use strict';

const { response, request } = require('express');
// const { response } = require('express');
const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;
const sweaterWeather = require('./assets/weather.json');

const server = express();
//we had to change it because both of them are working ocally



server.get('/weather',(request,response)=>{
// response.send(sweaterWeather);
// let data = sweaterWeather;
console.log(sweaterWeather);

let cdirnames=sweaterWeather.data.map(element=>{
return element.wind_cdir;
});

http://localhost:3001/sweaterWeather?WeatherWind_dir=80
server.get('/getWeather',(request,response)=>{
    // response.send(sweaterWeather);
    // let data = sweaterWeather;
    // console.log(sweaterWeather);
    
    let valObj=sweaterWeather.data.find(element=>{
    if(element.wind_cdir=="E")
        return element;
    });
response.send(valObj);
});

response.send(cdirnames);
});

http://localhost:3001/
server.get('/',(request,response)=>{
    let str="welcome to my home";
    response.send(str);
});

http://localhost:3001/test
server.get('/test',(request,response)=>{
    let str = "hello from backendsssss";
    response.send(str);
});

//http://localhost:3001/asdasd
server.get('*',(request,response)=>{
response.status(404).send('not found man.. maybe try something we actually have in here instead..');
});
server.listen(PORT,()=>{
    console.log(`listening on PORT number ${PORT}`);
});



// require('dotenv').config();
// const express = require('express');
// const server = express();
// // const weatherData = require('./data/weather.json')
// const cors = require('cors');
// const PORT = process.env.PORT
// // const axios = require('axios')

// server.use(cors())




// const weatherhandler=require('./Moduls/Weather');
// server.get('/weather', weatherhandlers);

// const axios = require('axios');

// module.exports = weatherhandler;


// class Forecast {
//         constructor(item) {
//             this.date = item.valid_date;
//             this.description = `low of ${item.min_temp}, hight of ${item.max_temp}, with ${item.weather.description}`;
//         }
//     }
    
//     async function weatherhandlers(req, res) {
//         let key = process.env.WEATHER_API_KEY;
//         let cityName = req.query.city_name;
    
//         let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${key}&days=4`
    
//         try {
//             let result = await axios.get(url)
    
//             let forecastArr = result.data.data.map(item => {
//                 return new Forecast(item);
//                 // return newforecast;
//             })
    
//             res.send(forecastArr);
//             console.log(forecastArr);
//         }
//         catch (errors) {
    
//             res.send('error: the informition that you searched for it are not found ' + errors);
//         }
    
//     }
//     server.get('*', (req, res) => {
//         res.send('not found');
//     })
    
//     server.listen(PORT, () => {
//         console.log(`listtening on PORT ${PORT}`)
//     })
    