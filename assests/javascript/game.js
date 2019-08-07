let wins = 0;

let losses = 0;

let score = 0;

let usercurrentscore = 0;


// here our random crystal vaulues are generated.

let randomCrystal1Value = Math.floor(Math.random() * 12) + 1;

let randomCrystal2Value = Math.floor(Math.random() * 12) + 1;

let randomCrystal3Value = Math.floor(Math.random() * 12) + 1;

let randomCrystal4Value = Math.floor(Math.random() * 12) + 1;

// those values are then stored in an array 
const crystalValues = [randomCrystal1Value, randomCrystal2Value, randomCrystal3Value, randomCrystal4Value];

// the player is shown a random number at the start of the game
let randomWinningNumber = Math.floor(Math.random() * 200) + 40;

document.getElementById("number-shown-to-user").innerText = "number to guess " + randomWinningNumber;

  // here is where buttons are assigned a random number from our array of random values

  let randomCrystalValue1 = crystalValues[Math.floor(Math.random() * crystalValues.length) ] 
  let randomCrystalValue2 = crystalValues[Math.floor(Math.random() * crystalValues.length) ] 
  let randomCrystalValue3 = crystalValues[Math.floor(Math.random() * crystalValues.length) ] 
  let randomCrystalValue4 = crystalValues[Math.floor(Math.random() * crystalValues.length) ] 
            
  const crystal1 = document.getElementById("crystal1")

  crystal1.setAttribute("data-crystalvalue", randomCrystalValue1);

  const crystal2 = document.getElementById("crystal2")

  crystal2.setAttribute("data-crystalvalue", randomCrystalValue2);
  
  const crystal3 = document.getElementById("crystal3")

  crystal3.setAttribute("data-crystalvalue", randomCrystalValue3);

  const crystal4 = document.getElementById("crystal4")

  crystal4.setAttribute("data-crystalvalue", randomCrystalValue4);


//here each time a button is clicked a function happens.

document.querySelectorAll("button").forEach(function (node) {

    node.addEventListener("click", function () {

     userClickedValue = node.getAttribute("data-crystalvalue");
     document.getElementById("user's-current-score").innerHTML =userClickedValue;
            
        });
    });


// this is our reset function
const reset = function () {

        randomCrystal1Value = Math.floor(Math.random() * 12) + 1;

        randomCrystal2Value = Math.floor(Math.random() * 12) + 1;

        randomCrystal3Value = Math.floor(Math.random() * 12) + 1;

        randomCrystal4Value = Math.floor(Math.random() * 12) + 1;

        score = 0

        usercurrentscore = 0

    }
 // here is our function that runs if we win restarting the game and reseting the random crystal values while increasing our wins counter
const win = function(){
        wins++;
        reset()
    }

// here is our loss function that runs if we lose restarting the game and reseting the random crystal values while increasing our loss counter
const loss = function() {
        losses++;
        reset()
    }

