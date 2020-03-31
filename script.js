"use strict"

document.addEventListener('DOMContentLoaded', init, false);

function init() {
  //setting initial svg elements
  let button = document.getElementById("button_group");
  let buttonBackground = document.getElementById("button");
  let textStart = document.getElementById("produktiv");
  let textStop = document.getElementById("stopp");
  let timer = document.getElementById("time_text");
  let timerId = null;

  //button onlick 
  button.addEventListener("click", () => {
    if (textStart.style.display === "initial") {

      textStart.style.display = "none";
      textStop.style.display = "initial";
      buttonBackground.style.fill = "red";
      timeMagic();
    } else if (textStart.style.display === "none") {

      clearInterval(timerId);

      textStart.style.display = "initial";
      textStop.style.display = "none";
      buttonBackground.style.fill = "green";

    } else {
      console.log(textStart)
    }
  })

  function timeMagic(min = 25, sec = 0) {

    let mlTime = (min * 60 + sec) * 1000

    timerId = setInterval(timeChange, 1000);

    function timeChange() {
      mlTime = mlTime - 1000;
      //conversion for displaying the time
      let minutes = Math.floor((mlTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((mlTime % (1000 * 60)) / 1000);
      timer.innerHTML = `${minutes}:${(seconds < 10) ? "0" : ""}${seconds}`;

      if (mlTime <= 0) {
        clearInterval(timerId)
        let audio = new Audio("./end.mp3");
        audio.play();
      };
    }
  }
}
