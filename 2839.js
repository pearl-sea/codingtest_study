const fs = require('fs');
let input = Number(fs.readFileSync('./input.txt'));

let output = -1

for (i = 0; i*3 <= input; i++){

    if ((input - (i*3)) % 5 === 0){
        output = i + ((input - (i*3))/5);
        break;
    }
}
console.log(output)