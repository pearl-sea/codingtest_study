const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let total = +input[0]
let count = +input[1]
let sum = 0

for (let i = 2; i<count+2; i++){
    let [price, num] = input[i].split(' ')
    sum += +price * +num
}

console.log(total === sum ? 'Yes' : 'No'); 


