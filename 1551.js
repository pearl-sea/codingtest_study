const fs = require('fs');
const pattern = /\n|\r|^\s*$/g;
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(pattern)
  .filter((item) => item !== '');

const limit = Number(input[0].split(' ')[1]);
let count = 0;
let a = input[1].split(',');
const b = [];

while (count < limit) {
  count++;

  for (let i = 0; i < a.length; i++) {
    b[i] = a[i + 1] - a[i];

    // console.log(`${b[i]} = ${a[i + 1]}-${a[i]}`);
  }

  a = b;
}

if (limit === 0) {
  console.log(input[1]);
} else {
  console.log(b.filter((el) => !isNaN(el)).join(','));
}
