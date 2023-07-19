import * as fs from "fs";
const input: number[] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

const stack: number[] = [];
for (let i = 0; i < input.length; i++) {
  input[i] === 0 ? stack.pop() : stack.push(input[i]);
}

let answer: number = 0;
for (let i = 0; i < stack.length; i++) {
  answer += stack.length > 0 ? stack[i] : 0;
}

console.log(answer);
