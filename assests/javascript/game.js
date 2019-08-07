let wins = 0;

let losses = 0;

let score = 0;

let usercurrentscore = 0;


// here our random crystal vaulues are generated.

let randomCrystal1Value = Math.floor(Math.random() * 12) + 1;

let randomCrystal2Value = Math.floor(Math.random() * 12) + 1;

let randomCrystal3Value = Math.floor(Math.random() * 12) + 1;

let randomCrystal4Value = Math.floor(Math.random() * 12) + 1;

const crystalValues = [randomCrystal1Value, randomCrystal2Value, randomCrystal3Value, randomCrystal4Value];

// the player is shown a random number at the start of the game
let randomWinningNumber = Math.floor(Math.random() * 200) + 40;

document.getElementById("number-shown-to-user").innerText = "number to guess " + randomWinningNumber;

//now each crystal must be assigned one of the values



//here we have each time a button is clicked a function happens.

document.querySelectorAll("button").forEach(function (node) {
    node.addEventListener("click", function () {

        // here is where when a button is clicked it is assigned a random number from our array of random values

        for (let i = 0; i < crystalValues.length; i++) {

            imageCrystal.setAttribute("data-crystalvalue", crystalValues[i]);

        });
})

// this is our reset function
function reset () {

     randomCrystal1Value = Math.floor(Math.random() * 12) + 1;

     randomCrystal2Value = Math.floor(Math.random() * 12) + 1;

     randomCrystal3Value = Math.floor(Math.random() * 12) + 1;

     randomCrystal4Value = Math.floor(Math.random() * 12) + 1;

     score = 0

     usercurrentscore = 0

}
 // here is our function that runs if we win restarting the game and reseting the random crystal values while increasing our wins counter
function win() {
    wins++;
    reset()
}

// here is our loss function that runs if we lose restarting the game and reseting the random crystal values while increasing our loss counter
function loss(){
    losses++;
    reset()
}

