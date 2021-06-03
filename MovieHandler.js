'use strict';
require('dotenv').config();
const { default: axios } = require('axios');

// const { response, request } = require('express');
// const { response } = require('express');
const express = require('express');

module.exports=movieHandler;



function movieHandler(req,res){
    let {searchQuery}=(req.query);
    let movieKey=process.env.movies_key;
    let url=`https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${searchQuery}`;
    console.log(searchQuery,'outError',req.query);
      axios
    .get(url)
    .then(result =>{
        const movieArr = result.data.results.map(item => {
         console.log('in result');
            return new Movie(item)
        })
         res.send(movieArr)
    }).catch(err => {
console.log(searchQuery,'inError');
        res.status(500).send(`error while getting data ${err}`);
        })
}

function Movie (item){
  this.title=item.title;
  this.overview=item.overview;
  this.average_votes=item.vote_average;
  this.total_votes=item.vote_count;
  this.image_url='https://image.tmdb.org/t/p/w500'+item.poster_path;
  this.popularity=item.popularity;
  this.released_on=item.release_date;
 
 }
