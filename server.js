'use strict';

// const { response } = require('express');
const express = require('express');

const sweaterWeather = require('./assets/weather.json');

const server = express();
//we had to change it because both of them are working ocally
const PORT = 3001;


server.get('/weather',(request,response)=>{
// response.send(sweaterWeather);
let data = sweaterWeather;
response.send(data);
});

server.get('/test',(request,response)=>{
    let str = "hello from backendsssss";
    response.send(str);
});
server.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`);
}) ;