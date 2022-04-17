console.log("index.js");

// Selecting the relevant elements on the page!
let game = document.getElementById("game");
let score = document.getElementById("score");

// Determining how many boxes we want on the page
let boxNo = 25;

// Starting point total
let points = 0;

// Draw the boxes to the page
for (var x = 0; x < boxNo; x++) {
  let boxHTML = "<div class='box'></div>";
  game.innerHTML += boxHTML;
}

//Select all the boxes on the page (now that they have been drawn)
let boxes = document.getElementsByClassName("box");

// run game
// Every 1000ms the game process will run once
var gameIsRunning = setInterval(gameProcess, 1000);

// helper function that produces random numbers for us
function rand(hi) {
  return Math.floor(Math.random() * hi);
}

function randBetween(lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo));
}

// Game process runs all the business logic that we need that is specific for our game!
function gameProcess() {
  // We have 25 boxes, we want one to be the "mole"
  //Generate a random number
  let randomNum = rand(boxNo);
  // select the corresdponing box
  let target = boxes[randomNum];
  // make that box red
  target.style.backgroundColor = "red";
}

// Window listener
window.addEventListener("click", function (event) {
  let boxColor = event.target.style.backgroundColor;
  if (boxColor == "red") {
    //increase the points
    points++;
    // write the points to the little box in the corner
    score.innerHTML = points;
    // reset the boxes background color
    event.target.style.backgroundColor = "";
  }
});
