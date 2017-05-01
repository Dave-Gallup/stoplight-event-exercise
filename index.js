// (function () {
//   'use strict';
//
//
// })();

function changeStopLight(){
  let light = document.querySelector('#stopLight');

  if(light.className === 'bulb stop'){
    light.className = 'bulb';
  }
  else{
    light.className = 'bulb stop';
  }
}

function changeSlowLight(){
  let light = document.querySelector('#slowLight');

  if(light.className === 'bulb slow'){
    light.className = 'bulb';
  }
  else{
    light.className = 'bulb slow';
  }
}

function changeGoLight(){
  let light = document.querySelector('#goLight');

  if(light.className === 'bulb go'){
    light.className = 'bulb';
  }
  else{
    light.className = 'bulb go';
  }
}

function logStopEnter(){
  let button = document.querySelector('#stopButton');
  console.log(`Entered ${button.textContent} button`);
}

function logStopLeave(){
  let button = document.querySelector('#stopButton');
  console.log(`Left ${button.textContent} button`);
}


function logSlowEnter(){
  let button = document.querySelector('#slowButton');
  console.log(`Entered ${button.textContent} button`);
}

function logSlowLeave(){
  let button = document.querySelector('#slowButton');
  console.log(`Left ${button.textContent} button`);
}

function logGoEnter(){
  let button = document.querySelector('#goButton');
  console.log(`Entered ${button.textContent} button`);
}

function logGoLeave(){
  let button = document.querySelector('#goButton');
  console.log(`Left ${button.textContent} button`);
}
var stop = document.querySelector("#stopButton");
stop.addEventListener("click", changeStopLight);
stop.addEventListener("mouseenter", logStopEnter);
stop.addEventListener("mouseleave", logStopLeave);

var stop = document.querySelector("#slowButton");
stop.addEventListener("click", changeSlowLight);
stop.addEventListener("mouseenter", logSlowEnter);
stop.addEventListener("mouseleave", logSlowLeave);

var stop = document.querySelector("#goButton");
stop.addEventListener("click", changeGoLight);
stop.addEventListener("mouseenter", logGoEnter);
stop.addEventListener("mouseleave", logGoLeave);
