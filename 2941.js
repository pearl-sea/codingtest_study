const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

const pattern = /c=|c-|dz=|d-|lj|nj|s=|z=|./g;
const matched = input.match(pattern)
const array = input.split(pattern).filter(char=>char !== '');

const result = [...array,...matched]

console.log(result.length)