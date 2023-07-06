import * as fs from "fs";
const input: number[] = fs.readFileSync("./input.txt").toString().trim().split(" ").map(Number);

const result: any[] = [];
function recursion(current: number[]) {
  //   console.log(`current`, current);
  //   console.log(`result`, result);

  if (current.length === input[1]) {
    result.push(current);
    return;
  }

  for (let i = 1; i <= input[0]; i++) {
    if (current.indexOf(i) === -1) {
      recursion([...current, i]);
    }
  }
}

recursion([]);
let answer: string = "";
for (let i = 0; i < result.length; i++) {
  answer += result[i].join(" ") + "\n";
}
console.log(answer.slice(0, answer.length - 1));
