const promptSync = require('prompt-sync')();
let grade : string;
let marks : number;
function gradingsystem(){
  

  const marks = promptSync('Enter student marks: ');
if(marks >= 0 && marks <= 40 ){
    grade ='F'
}
else if (marks >= 41 && marks <=50)
{
    grade ='D';
}

else if(marks >= 51 && marks<= 60)
{
    grade = 'C'
}
else if (marks >= 61 && marks<= 75)
{
    grade = 'B'
}
else if (marks >= 76 && marks <=100){
grade ='A'
}
else {
console.log (`Invalid`);
}
console.log(`Student Grade: ${grade}`);
}
gradingsystem();


