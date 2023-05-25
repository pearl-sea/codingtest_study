const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('');

let count_69 = 0;
let obj = {};

for (let i = 0; i < input.length; i++) {
  if (input[i] === '6' || input[i] === '9') {
    count_69++;
  } else {
    if (obj[input[i]] === undefined) {
      obj[input[i]] = 0;
    }
    obj[input[i]] += 1;
  }
}

count_69 = Math.ceil(count_69 / 2);

let count = Math.max(...Object.values(obj));

if (count > count_69) {
  console.log(count);
} else {
  console.log(count_69);
}
