console.log("Welcome to Music_Mate");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('AsalMein.mp4');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "", filePath: "" , coverPath: "Asal_Mein.jpg"},
    {songName: "", filePath: "", coverPath: "Cover/Ek_tarfa.jpg"},
    {songName: "", filePath: "", coverPath: "covers/3.jpg"},
    {songName: "", filePath: "", coverPath: "covers/4.jpg"},
    {songName: "", filePath: "", coverPath: "covers/5.jpg"},
    {songName: "", filePath: "", coverPath: "covers/6.jpg"},
    {songName: "", filePath: "", coverPath: "covers/7.jpg"},
    {songName: "", filePath: "", coverPath: "covers/8.jpg"},
    {songName: "", filePath: "", coverPath: "covers/9.jpg"},
    {songName: "", filePath: "", coverPath: "covers/10.jpg"},
]

masterPlay.addEventListener('click',()=>{
    
})
