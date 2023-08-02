import * as fs from "fs";
const input: number[] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

let answer: string = "";
for (let i: number = 0; i < input.length; i++) {
  const floor = [];

  for (let j: number = 1; j <= 14; j++) {
    floor.push(j);
  }

  let acc: number = 0;
  let number: number = 0;
  if (i % 2 === 0) {
    for (let j: number = 1; j <= input[i]; j++) {
      for (let k: number = 0; k < 14; k++) {
        acc += floor[k];
        floor[k] = acc;
        if (k + 1 === input[i + 1]) {
          number = floor[k];
        }
        // console.log(floor[k]);
      }
      // console.log(`${j}층-----------------`);
      acc = 0;
    }

    if (input[i] === 0) {
      answer += input[i + 1] + "\n";
    } else {
      answer += number + "\n";
    }
  }
}

console.log(answer.slice(0, answer.length - 1));
