import * as fs from "fs";
const input: number[][] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number))
  .slice(1);

class Person {
  weight: number;
  height: number;
  rank: number;

  constructor(x: number, y: number) {
    this.weight = x;
    this.height = y;
    this.rank = 1;
  }
}
const arr = [];

for (let i: number = 0; i < input.length; i++) {
  const x = input[i][0];
  const y = input[i][1];

  const person = new Person(x, y);
  arr.push(person);
}

for (let i: number = 0; i < arr.length; i++) {
  for (let j: number = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i].weight < arr[j].weight && arr[i].height < arr[j].height) {
        arr[i].rank += 1;
      }
    }
  }
}

// console.log(arr)

let answer: string = "";
for (let obj of arr) {
  answer += obj.rank + " ";
}

console.log(answer.slice(0, answer.length - 1));
