const fs = require('fs');
const pattern = /\n|\r|^\s*$/g;
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(pattern)
  .filter((item) => item !== '');


console.log(input[0].split('').sort((a,b)=>b-a).join(''))