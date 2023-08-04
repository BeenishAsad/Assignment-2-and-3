// When the system starts the user is prompted with a user id and user pin. 
// After entering the details successfully, the ATM functionalities are unlocked. 
// All the user data is generated randomly.

const promptsync1 = require ('prompt-sync')();
console.log(`Welcome to RedBox Banks`)

let id: number; 
let pin: number;
let balance: number;


function RandomNumberr(max: number, min: number):number{ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ID
    const minimum =0 ;
    const maximum = 999;  
    const EnterID = RandomNumberr(minimum,maximum);
    



// Pin
    const minni =1000 ; 
    const maxi = 9999;  
    const EnterPin = RandomNumberr(minni,maxi);



//Balance
    const mi =0 ;
    const ma = 10000;  
    const EnterBalance = RandomNumberr(mi,ma);


//--------------------------------------------------------------------------------

console.log(`Id = ${EnterID} Pin = ${EnterPin}`);

//--------------------------------------------------------------------------------


function EnterPin_ID(){
    const AccID = parseInt (promptsync1(`Enter ID: `))
    const AccPin = parseInt(promptsync1(`Enter PIN: `))
    if (AccID === EnterID && AccPin === EnterPin ){
     console.log(`Welcome ${EnterID}.`);
     console.log(`Your Current Account Balance is ${EnterBalance}.`);
     const SelectOption = parseInt(promptsync1(`Select an option:
    1. Deposit
    2. Withdraw
    3. Change PIN
    4. Exit 
    
    Option: `)
    
    )

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
    console.log(`Re-Enter your Id and Pin.`)
    EnterPin_ID();
}
}

function deposit (){

 //--------------------------------------------------------------------------------
console.log(`Id = ${EnterID} Pin = ${EnterPin}`);  // using for own ease when running for output
//--------------------------------------------------------------------------------

    const DepositAmount = parseFloat(promptsync1(`Enter amount you would like to deposit: `));
    console.log(`Your previous Account Balance was ${EnterBalance}.`);
    console.log (`Your current balance is: `, EnterBalance + DepositAmount)
    EnterPin_ID();
}

function  withdraw(){

//--------------------------------------------------------------------------------
console.log(`Id = ${EnterID} Pin = ${EnterPin}`);  // using for own ease when running for output
//--------------------------------------------------------------------------------

    const WithdrawAmount = parseFloat(promptsync1(`Enter amount you would like to Withdraw: `));
    console.log(`Your previous Account Balance was ${EnterBalance}.`);
        if(WithdrawAmount > EnterBalance){
            console.log(`Amount can not be withdrawn.`);
        }
        else if (WithdrawAmount <= EnterBalance){
            console.log (`Your current balance is: `, EnterBalance - WithdrawAmount)
        }
        else{
            console.log(`Invalid`)
        }

        EnterPin_ID();
    

}

function changePIN(){

//--------------------------------------------------------------------------------
console.log(`Id = ${EnterID} Pin = ${EnterPin}`); // using for own ease when running for output
//--------------------------------------------------------------------------------

    const NewPin  = parseInt (promptsync1(`Enter new Pin: `));
        if(NewPin >= 1000 && NewPin <=9999){ 
            const PrevPin =parseInt(promptsync1(`Enter Previous Pin: `));
            if (PrevPin == EnterPin)
            {
                console.log(`Your new Pin is ${NewPin}`);
            }
        }
        else {
            console.log(`Invalid New Pin.`);       
        }
        EnterPin_ID();
}

EnterPin_ID();
     
    

