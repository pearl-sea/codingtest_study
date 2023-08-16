import * as fs from "fs";
const input = fs.readFileSync("./input.txt").toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];

const comparison = (a: number, b: number): string => {
  if (a < b) {
    return "<";
  } else if (a === b) {
    return "==";
  } else {
    return ">";
  }
};

console.log(comparison(a, b));
