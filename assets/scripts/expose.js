// expose.js

window.addEventListener('DOMContentLoaded', init);

const selectElement = document.getElementById("horn-select");
const imageElement = document.querySelector("section > img");
const audioElement = document.querySelector("audio");

selectElement.addEventListener("change", function(){
  audioElement.src = "../assets/audio/" + selectElement.value + ".mp3";
  imageElement.src = "../assets/images/" + selectElement.value + ".svg";
})

const sliderElement = document.getElementById("volume");
const imageLevelElement = document.querySelector("div > img");

sliderElement.addEventListener("input", function(){
  //console.log(audioElement.volume)
  audioElement.volume = sliderElement.value * .01;
  if(sliderElement.value >= 67) 
    imageLevelElement.src = "../assets/icons/volume-level-3.svg";
  else if(sliderElement.value >= 33)
    imageLevelElement.src = "../assets/icons/volume-level-2.svg";
  else if(sliderElement.value >= 1)
    imageLevelElement.src = "../assets/icons/volume-level-1.svg";
  else
    imageLevelElement.src = "../assets/icons/volume-level-0.svg";
})

const buttonElement = document.querySelector("button");
const conf = new JSConfetti();

buttonElement.addEventListener("click", function() {
  audioElement.play();
  if(selectElement.value == "party-horn")
    conf.addConfetti();
})


function init() {
  // TODO
}