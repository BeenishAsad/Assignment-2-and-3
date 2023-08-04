const promptsync = require (`prompt-sync`) ();

const min =1 ;
const max = 100;  //make it 5 to see if the program runs correctly.
const secretNumber = RandomNumber(min,max);
console.log(`Guess the number between ${min} and ${max}`);  


function RandomNumber(max: number, min: number):number{ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gamestart(){

    const data = promptsync (`Enter a Guess between 1 to 100: `);

    if (data == secretNumber){
        console.log (`Congratulations you have guessed the secret number which is ${secretNumber}`);

    }

    else if (data > secretNumber) {
        console.log (`${data} is greater than the secret number.`);
       gamestart();
    }

    else if( data < secretNumber){
        console.log (`${data} is less than the secret number.`);
       gamestart();
    }

    else{
        console.log(`Invalid`)
        gamestart();
    }
    
} 

gamestart();