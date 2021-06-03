'use strict';
// const { response, request } = require('express');
require('dotenv').config();
const { default: axios } = require('axios');
// const { response, request } = require('express');
// const { response } = require('express');
const express = require('express');

module.exports=weatherHandler;



class cityWeather {
    constructor(item) {
        this.description = `max of ${item.max_temp} and low of ${item.min_temp} and it's description is: ${item.weather.description}`;
        this.date = `${item.datetime}`;
    }
}

async function weatherHandler(request, response) {
    // response.send(sweaterWeather);
    // let data = sweaterWeather;
    let city = request.query.cityName;
    // console.log(city);

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
























// const axios = require('axios');

// module.exports = weatherhandler;


// class Forecast {
//         constructor(item) {
//             this.date = item.valid_date;
//             this.description = `low of ${item.min_temp}, hight of ${item.max_temp}, with ${item.weather.description}`;
//         }
//     }
    
//     async function weatherhandler(req, res) {
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