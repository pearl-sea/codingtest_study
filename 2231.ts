import * as fs from 'fs';

const input: number = Number(fs.readFileSync('./input.txt').toString().trim());

let count: number = 1;
let output: number = 0;

while (count < input) {
  const m: number = count;
  const arr: number[] = m.toString().split('').map(Number);
  let n: number = m;

  for (let i = 0; i < arr.length; i++) {
    n += arr[i];
  }

  if (input === n) {
    output = m;
    break;
  } else {
    count++;
  }
}

console.log(output);

//풀기 전 생각
//4673번 문제가 이 문제의 강화판인 것 같다.
