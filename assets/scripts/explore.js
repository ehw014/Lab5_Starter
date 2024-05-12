// explore.js

window.addEventListener('DOMContentLoaded', init);
const selectElement = document.querySelector("select");
const speech = window.speechSynthesis;
let voices = [];

function init() {
  voices = speech.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    selectElement.appendChild(option);
  }
}

const buttonElement = document.querySelector("button");
const textElement = document.getElementById("text-to-speak");

buttonElement.addEventListener("click", function(){
  const phrase = new SpeechSynthesisUtterance(textElement.value);
  const selectedVoice = selectElement.selectedOptions[0].getAttribute("data-name");
  for(let i =0; i < voices.length; i++) {
    if(voices[i].name === selectedVoice)
      phrase.voice = voices[i];
  }
  speech.speak(phrase);
})

const smileElement = document.querySelector("img");

setInterval(function(){  if (!speech.speaking)
  smileElement.src = "../assets/images/smiling.png";
else
  smileElement.src = "../assets/images/smiling-open.png";

},100);
