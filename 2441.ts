import * as fs from "fs";

const input = Number(fs.readFileSync("./input.txt").toString());
let answer = "";

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    i > j ? (answer += " ") : (answer += "*");
  }

  answer += "\n";
}

console.log(answer.slice(0, answer.length - 1));
