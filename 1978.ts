import * as fs from 'fs';

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let arr: number[] = input[1].split(' ').map(Number);

let count: number = 0;
for (let el of arr) {
  let isPrime: boolean = true;

  if (el === 1) {
    isPrime = false;
  }

  for (let i: number = 2; i < el; i++) {
    if (el % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count++;
  }
}
console.log(count);