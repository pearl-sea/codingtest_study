import * as fs from "fs";
const input: number[] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

let answer: string = "";
for (let num of input) {
  const arr: any[] = [];

  let i: number = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      arr.push(i);
    } else {
      arr.push("x");
    }
    num = Math.floor(num / 2);
    i++;
  }

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] !== "x") {
      if (i !== arr.length - 1) {
        answer += arr[i] + " ";
      } else {
        answer += arr[i];
      }
    }
  }

  answer += "\n";
}
console.log(answer.slice(0, answer.length - 1));
