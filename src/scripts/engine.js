const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio("src/tunes/a.wav");
let mapedKeys = [];

const playTune = (key) => {
  audio.src = `./src/tunes/${key}.wav`;
  audio.play();
  
};

function play(){
  audio.play()
}

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  
});


