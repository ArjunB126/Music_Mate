console.log("Welcome to Music_Mate");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/ Asal Mein.mp4');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));