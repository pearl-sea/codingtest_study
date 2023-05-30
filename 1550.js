const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('');

const arr = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(input[i]) !== -1) {
    input[i] = arr.indexOf(input[i]) + 10;
  }
}

let result = 0

input.reverse();

for (let i = 0; i < input.length; i++){
    input[i] = Number(input[i])
    input[i] *= (16 ** i)
    
    result += input[i]
}

console.log(result);
