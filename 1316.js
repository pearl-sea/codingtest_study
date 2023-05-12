const fs = require('fs');
let pattern = /\n|\r/g;

let input = fs.readFileSync('./input.txt').toString().split(pattern).filter(input => input.trim() !== '')
input.splice(0,1)

let result = 0;
let count = 0;

for (str of input){

    str = str.split('')
   for (i = 0; i < str.length; i++){

        if(str.indexOf(str[i])===i){ 
            count++; 
        }

        if(str[i] === str[i-1]){ 
            count+=1; 
        }
    
        if (count === str.length){
            result+=1
        }    
   }

   count = 0;

}

console.log(result)