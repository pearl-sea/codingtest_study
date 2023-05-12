const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const count = +input[0];

for (let i = 1; i <= count; i++){
    let [key, value] = input[i].split(' ')

    console.log(`Case #${i}: ${+key+ +value}`)
}

