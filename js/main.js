// setup canvas

var canvas = document.querySelector('canvas');

// This is basically telling Js that the context of the drawing is going to be one of 2 dimensional.
// The other context is 3 dimensional.
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

loop()
