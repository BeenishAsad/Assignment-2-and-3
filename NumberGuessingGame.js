var promptsync = require("prompt-sync")();
function RandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function game (){
var min = 1;
var max = 5;
var secretNumber = RandomNumber(min, max);
console.log("Guess the number between ".concat(min, " and ").concat(max));
function gamestart() {
    var data = promptsync("Enter a Guess between 1 to 5: ");
    if (data == secretNumber) {
        console.log("Congratulations you have guessed the secret number which is ".concat(secretNumber));
    }
    else if (data > secretNumber) {
        console.log("".concat(data, " is greater than the secret number."));
        gamestart();
    }
    else if (data < secretNumber) {
        console.log("".concat(data, " is less than the secret number."));
        gamestart();
    }
    else {
        console.log("Invalid");
        gamestart();
    }
}
gamestart();
// }
// game();
