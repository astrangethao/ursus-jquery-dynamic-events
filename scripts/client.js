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



  genericColorBox('purple');

  $('.js-color-container').on('click', '.js-colorbox', clickDeleteBox);
}

function clickDeleteBox() {
  console.log(this);
  // const $myBox = $(this);
  // $(this).remove();

  $(this).toggleClass('box');
  $(this).addClass('box');
  $(this).removeClass('box');

  if ($(this).hasClass('red')) {
    redCounter--;
    $('.js-red-count').text(redCounter);
  } else if ($(this).hasClass('yellow')) {
    yellowCounter--;
    $('.js-yellow-count').text(yellowCounter);
  } else if ($(this).hasClass('blue')) {
    blueCounter--;
    $('.js-blue-count').text(blueCounter);
  } else if ($(this).hasClass('green')) {
    greenCounter--;
    $('.js-green-count').text(greenCounter);
  }

  console.log('DELETE ME');
}

function genericColorBox(newColor) {
  // redCounter += 1;
  // $('.js-red-count').text(redCounter);
  const $whatIsThis = $('.js-color-container')
    .append(`<div class="js-colorbox box"></div>`)
    .children().last()
    .addClass(newColor);
}

function clickAddRed(event) {
  redCounter += 1;
  $('.js-red-count').text(redCounter);
  $('.js-color-container').append(`<div class="js-colorbox box red"></div>`);
}

function clickAddYellow(event) {
  yellowCounter += 1;
  $('.js-yellow-count').text(yellowCounter);
  $('.js-color-container').append(`<div class="js-colorbox box yellow"></div>`);
}

function clickAddBlue(event) {
  blueCounter += 1;
  $('.js-blue-count').text(blueCounter);
  $('.js-color-container').append(`<div class="js-colorbox box blue"></div>`);
}

function clickAddGreen(event) {
  greenCounter += 1;
  $('.js-green-count').text(greenCounter);
  $('.js-color-container').append(`<div class="js-colorbox box green"></div>`);
}
