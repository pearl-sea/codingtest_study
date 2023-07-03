import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n");

let answer: string = "";
const arr: number[] = [];

for (let i: number = 0; i < input.length; i++) {
  arr.push(input[i].length);
}
let maxLength = Math.max(...arr);

for (let i: number = 0; i < maxLength; i++) {
  for (let j: number = 0; j < input.length; j++) {
    if (input[j] !== undefined && input[j][i] !== undefined) {
      answer += input[j][i];
      //   console.log(`input[${j}][${i}]`, input[j][i]);
    }
  }
}

console.log(answer);

//풀기 전 생각
//(0,0) (1,0), (2,0), (3,0), (4,0), (0,1), (1,1)..순으로 출력
