import * as fs from "fs";
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const cuttingNumber = Number(input[0].split(" ")[0]) + 1;
const s = input.slice(1, cuttingNumber);
const m = input.slice(cuttingNumber);

const obj = {};

for (const el of m) {
  if (obj[el] === undefined) {
    obj[el] = 0;
  }

  obj[el]++;
}

let count = 0;
for (const el of s) {
  if (obj[el] !== undefined) {
    count += obj[el];
  }
}

console.log(count);
