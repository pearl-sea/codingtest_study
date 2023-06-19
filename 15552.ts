import * as fs from 'fs';

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const arr: string[] = input.slice(1);

let output: string = '';

for (let el of arr) {
  const a = Number(el.split(' ')[0]);
  const b = Number(el.split(' ')[1]);

  output += a + b + ',';
}

console.log(
  output
    .split(',')
    .join('\n')
    .slice(0, output.length - 1)
);

//큐2 를 풀면서 시간초과가 났고 그 원인을 해결하는데 도움을 주었던 문제
