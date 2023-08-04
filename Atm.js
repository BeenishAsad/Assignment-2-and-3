// When the system starts the user is prompted with a user id and user pin. 
// After entering the details successfully, the ATM functionalities are unlocked. 
// All the user data is generated randomly.
var promptsync1 = require('prompt-sync')();
console.log("Welcome to RedBox Banks");
var id;
var pin;
var balance;
function RandomNumberr(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ID
var minimum = 0;
var maximum = 999;
var EnterID = RandomNumberr(minimum, maximum);
// Pin
var minni = 1000;
var maxi = 9999;
var EnterPin = RandomNumberr(minni, maxi);
//Balance
var mi = 0;
var ma = 10000;
var EnterBalance = RandomNumberr(mi, ma);
//--------------------------------------------------------------------------------
console.log("Id = ".concat(EnterID, " Pin = ").concat(EnterPin));
//--------------------------------------------------------------------------------
function EnterPin_ID() {
    var AccID = parseInt(promptsync1("Enter ID: "));
    var AccPin = parseInt(promptsync1("Enter PIN: "));
    if (AccID === EnterID && AccPin === EnterPin) {
        console.log("Welcome ".concat(EnterID, "."));
        console.log("Your Current Account Balance is ".concat(EnterBalance, "."));
        var SelectOption = parseInt(promptsync1("Select an option:\n    1. Deposit\n    2. Withdraw\n    3. Change PIN\n    4. Exit \n    \n    Option: "));
        switch (SelectOption) {
            case 1:
                deposit();
                break;
            case 2:
                withdraw();
                break;
            case 3:
                changePIN();
                break;
            case 4:
                console.log('Thank you for using our ATM. Goodbye!');
                break;
            default:
                console.log('Invalid option. Please try again.');
                EnterPin_ID();
                break;
        }
    }
    else {
        console.log("Re-Enter your Id and Pin.");
        EnterPin_ID();
    }
}
function deposit() {
    //--------------------------------------------------------------------------------
    console.log("Id = ".concat(EnterID, " Pin = ").concat(EnterPin));
    //--------------------------------------------------------------------------------
    var DepositAmount = parseFloat(promptsync1("Enter amount you would like to deposit: "));
    console.log("Your previous Account Balance was ".concat(EnterBalance, "."));
    console.log("Your current balance is: ", EnterBalance + DepositAmount);
    EnterPin_ID();
}
function withdraw() {
    //--------------------------------------------------------------------------------
    console.log("Id = ".concat(EnterID, " Pin = ").concat(EnterPin));
    //--------------------------------------------------------------------------------
    var WithdrawAmount = parseFloat(promptsync1("Enter amount you would like to Withdraw: "));
    console.log("Your previous Account Balance was ".concat(EnterBalance, "."));
    if (WithdrawAmount > EnterBalance) {
        console.log("Amount can not be withdrawn.");
    }
    else if (WithdrawAmount <= EnterBalance) {
        console.log("Your current balance is: ", EnterBalance - WithdrawAmount);
    }
    else {
        console.log("Invalid");
    }
    EnterPin_ID();
}
function changePIN() {
    //--------------------------------------------------------------------------------
    console.log("Id = ".concat(EnterID, " Pin = ").concat(EnterPin));
    //--------------------------------------------------------------------------------
    var NewPin = parseInt(promptsync1("Enter new Pin: "));
    if (NewPin >= 1000 && NewPin <= 9999) {
        var PrevPin = parseInt(promptsync1("Enter Previous Pin: "));
        if (PrevPin == EnterPin) {
            console.log("Your new Pin is ".concat(NewPin));
        }
    }
    else {
        console.log("Invalid New Pin.");
    }
    EnterPin_ID();
}
EnterPin_ID();
//  if (SelectOption == 1){
//     const DepositAmount = parseFloat(promptsync1(`Enter amount you would like to deposit: `));
//     console.log (`Your current balance is: `, EnterBalance + DepositAmount)
//  }
//  else if (SelectOption == 2)
//  {
//     const WithdrawAmount = parseFloat(promptsync1(`Enter amount you would like to Withdraw: `));
//     if(WithdrawAmount > EnterBalance){
//         console.log(`Amount can not be withdrawn.`);
//     }
//     else if (WithdrawAmount <= EnterBalance){
//         console.log (`Your current balance is: `, EnterBalance - WithdrawAmount)
//     }
//     else{
//         console.log(`Invalid`)
//     }
//  }
//  else if ( SelectOption == 3){
//     const NewPin  = parseInt (promptsync1(`Enter new Pin: `));
//     if(NewPin >= 1 && NewPin <=10){  // >= 1000   <=9999
//         const PrevPin =parseInt(promptsync1(`Enter Previous Pin: `));
//         if (PrevPin == EnterPin)
//         {
//             console.log(`Your new Pin is ${NewPin}`);
//         }
//     }
//     else {
//         console.log(`Invalid New Pin.`);       
//     }
//  }
// else if (SelectOption == 4)
// {
//     const ExitToHS = promptsync1(`Enter Y to Exit.`);
//     if (ExitToHS == 'Y')
//     {
//         EnterPin_ID();
//     }
//     else {
//         console.log('Enter Y to exit.')
//     }
// }
//     }
//     else {
//         console.log(`Re-Enter your Id and Pin.`)
//         EnterPin_ID();
//     }
// }
// EnterPin_ID();
