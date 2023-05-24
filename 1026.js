const fs = require('fs');
const pattern = /\n|\r|^\s*$/g;
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(pattern)
  .filter((item) => item !== '');

let s = 0;
let a = input[1].split(' ').sort((a, b) => a - b);
let b = input[2].split(' ');

for (let i = 0; i < input[0]; i++) {
  let maxValue = -Infinity;
  for (let i = 0; i < b.length; i++) {
    b[i] = Number(b[i]);

    if (b[i] > maxValue) {
      maxValue = b[i];
    }
  }

  //   console.log( `${s} += ${a[i]}*${maxValue}`)
  s += a[i] * maxValue;

  b.splice(b.indexOf(maxValue), 1);
}

console.log(s);
