// Include both the geocoder and weather NPM packages
var app = (function (){
	var client = require("./key.js");
	
})
var twitter = require("twitter");
var spotify_this_song = require("spotify_this_song");
var movie_this = require("movie_this");
var do_what_it_says = require("do_what_it_says");


client.post('statuses/update', {status: 'I Love Twitter'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })