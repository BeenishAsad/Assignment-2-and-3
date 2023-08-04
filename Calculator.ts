const promptsync2 = require ('prompt-sync')();

function addition ( x: number, y: number): number{
    return x+y;
    }

    function subtraction ( x: number, y: number): number{
        return x-y;
        }

        function Multiplication ( x: number, y: number): number{
            return x*y;
            }

            function division ( x: number, y: number): number{
                return x/y;
                }


const x =parseInt( promptsync2 (`First Number: `));
console.log("User input:", x);

const y =parseInt( promptsync2 (`Second Number: `));
console.log('User Input',y);




console.log(`Addidtion`, addition(x,y));
console.log(`Subtraction`, subtraction(x,y));
console.log ('Multiplication', Multiplication(x,y));
console.log(`Division`, division(x,y));

