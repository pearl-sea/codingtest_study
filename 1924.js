const fs = require('fs');
const pattern = /\n|\r|^\s*$/g;
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(pattern)
  .filter((item) => item !== '');

const month = Number(input[0].split(' ')[0]);
let day = Number(input[0].split(' ')[1]);
let week = '';

for (let i = 1; i <= month; i++) {
  const month31day = [1, 3, 5, 7, 8, 10];
  const month30day = [4, 6, 9, 11];

  if (i > 1) {
    if (month31day.indexOf(i - 1) !== -1) {
      day += 31;
    //   console.log(`+31일`)
    } else if (month30day.indexOf(i - 1) !== -1) {
      day += 30;
    //   console.log(`+30일`)
    } else {
      day += 28;
    //   console.log(`+28일`)
    }
  }
//   console.log(`1월 ${day}일`)
//   console.log(`-----------------`)
}

day % 7 === 1 ? (week = 'MON') : '';
day % 7 === 2 ? (week = 'TUE') : '';
day % 7 === 3 ? (week = 'WED') : '';
day % 7 === 4 ? (week = 'THU') : '';
day % 7 === 5 ? (week = 'FRI') : '';
day % 7 === 6 ? (week = 'SAT') : '';
day % 7 === 0 ? (week = 'SUN') : '';

console.log(week);
