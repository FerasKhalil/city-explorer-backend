'use strict';

const { response, request } = require('express');
// const { response } = require('express');
const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;
const sweaterWeather = require('./assets/weather.json');
const cors = require('cors');
const { default: axios } = require('axios');
const server = express();
//we had to change it because both of them are working ocally

server.use(cors()); //this makes my server opened for anyone to send requests


class cityWeather {
    constructor(item) {
        this.description = `max of ${item.max_temp} and low of ${item.min_temp} and it's description is: ${item.weather.description}`;
        this.date = `${item.datetime}`;
    }
}
//localhost:3001/weather?cityName=amman
server.get('/weather', weatherHandler);
async function weatherHandler(request, response) {
    // response.send(sweaterWeather);
    // let data = sweaterWeather;
    let city = request.query.cityName;
    console.log(city);

    let weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.API_KEY}`;
    // console.log(weatherURL);
    // console.log(weatherURL);
    try {
        let result4 = await axios.get(weatherURL);
        // console.log(result4.data.data.length);
        
        let cityArr = result4.data.data.map(element => {
            return new ForeCast(element);
        });

        //     let found = sweaterWeather.find(element => {

        //         if (element.city_name.toLowerCase() == city.toLowerCase()) {
        //             return element;
        //         }
        //     });
        //     found.data.forEach(element => {
        //         arr.push(new cityWeather(element));
console.log(cityArr);
        //     });
        response.send(cityArr);
    }

    catch (error) {
        response.status(500).send("the data you're looking for isn't available");
    }

};

class ForeCast {
    constructor(constElement) {
        this.date = constElement.valid_date;
        this.description = `low of ${constElement.low_temp}, high of ${constElement.max_temp} with ${constElement.weather.description}`
    }
}

//
// console.log(sweaterWeather);

// let cdirnames = sweaterWeather.data.map(element => {
//     return element.wind_cdir;
// });


//http://localhost:3001/sweaterWeather?WeatherWind_dir=80&max=70
// let windDirection=request.query.WeatherWind_dir;
// let maxTemp=request.query.max;

// server.get('/getWeather', (request, response) => {
//     // response.send(sweaterWeather);
//     // let data = sweaterWeather;
//     // console.log(sweaterWeather);

//     let valObj = sweaterWeather.data.find(element => {
//         if (element.wind_cdir == "E")
//             return element;
//     });
//     response.send(valObj);
// });

// response.send(cdirnames);

//http://localhost:3001/
server.get('/', (request, response) => {
    let str = "welcome to my home";
    response.send(str);
});

//http://localhost:3001/test
server.get('/test', (request, response) => {
    let str = "hello from backendsssss";
    // response.send(str);
    response.status(200).send(str);
});

//http://localhost:3001/asdasd
server.get('*', (request, response) => {
    response.status(404).send('not found man.. maybe try something we actually have in here instead..');
});
server.listen(PORT, () => {
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
