import * as fs from 'fs';
const input: string = fs.readFileSync('input.txt').toString().trim();

let num: number = Number(input);
let honeycomb: number = 1;
let output: number = 1;

for (let i = 1; i <= num; i++) {
  if (honeycomb >= num) {
    break;
  }

  honeycomb += 6 * i;
  output = i;
}

console.log(num === 1 ? 1 : output + 1);

//풀기 전 생각
// 1, 7, 19, 37, 61...
// 6, 12, 18, 24...씩 증가

//풀고 난 생각
//i가 증가하거나 증가하지 않는 기준을 잡는게 머리아팠다. break문을 몇번씩 왔다갔다한건지..
//입력값이 1일때의 예외도 필요했다.
