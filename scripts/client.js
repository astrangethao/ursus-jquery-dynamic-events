console.log('Hello Ursus');

let redCounter = 0;
let yellowCounter = 0;
let blueCounter = 0;
let greenCounter = 0;

$(document).ready(init);

// init will get used as a CALLBACK function and passed to .ready()
function init() {
  // EVENT LISTENER
  $('.js-click-add-red').on('click', clickAddRed);
  $('.js-click-add-yellow').on('click', clickAddYellow);
  $('.js-click-add-blue').on('click', clickAddBlue);
  $('.js-click-add-green').on('click', clickAddGreen);
}

function clickAddRed(event) {
  redCounter += 1;
  $('.js-red-count').text(redCounter);
  $('.js-color-container').append(`<div class="box red"></div>`);
}

function clickAddYellow(event) {
  yellowCounter += 1;
  $('.js-yellow-count').text(yellowCounter);
  $('.js-color-container').append(`<div class="box yellow"></div>`);
}

function clickAddBlue(event) {
  blueCounter += 1;
  $('.js-blue-count').text(blueCounter);
  $('.js-color-container').append(`<div class="box blue"></div>`);
}

function clickAddGreen(event) {
  greenCounter += 1;
  $('.js-green-count').text(greenCounter);
  $('.js-color-container').append(`<div class="box green"></div>`);
}


