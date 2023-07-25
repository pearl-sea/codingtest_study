import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const allString: string[] = input.slice(1);
const NandM: number[] = input[0].split(" ").map(Number);
const N: number = NandM[0];
const M: number = NandM[1];

const table = {};

for (let i = 0; i < N; i++) {
  table[allString[i]] = "dut";
}
for (let i = N; i < N + M; i++) {
  table[allString[i]] !== undefined ? (table[allString[i]] += "bo") : (table[allString[i]] = "bo");
}

const answer: (string | number)[] = Object.keys(table).filter((key) => table[key] === "dutbo");
answer.unshift(answer.length);

console.log(answer.sort().join("\n"));
