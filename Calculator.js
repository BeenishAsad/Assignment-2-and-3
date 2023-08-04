var promptsync2 = require('prompt-sync')();
function addition(x, y) {
    return x + y;
}
function subtraction(x, y) {
    return x - y;
}
function Multiplication(x, y) {
    return x * y;
}
function division(x, y) {
    return x / y;
}
var x = parseInt(promptsync2("First Number: "));
console.log("User input:", x);
var y = parseInt(promptsync2("Second Number: "));
console.log('User Input', y);
console.log("Addidtion", addition(x, y));
console.log("Subtraction", subtraction(x, y));
console.log('Multiplication', Multiplication(x, y));
console.log("Division", division(x, y));
