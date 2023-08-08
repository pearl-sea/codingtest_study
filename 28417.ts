import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n").slice(1);

const answer: number[] = [];
for (let playerIndex: number = 0; playerIndex < input.length; playerIndex++) {
  const arr: number[] = input[playerIndex].split(" ").map(Number);

  const run: number = Math.max(...arr.splice(0, 2));
  arr.sort((a, b) => b - a);

  answer.push(run + arr[0] + arr[1]);
}
console.log(Math.max(...answer));
