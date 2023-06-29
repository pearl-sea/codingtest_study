import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n");

class Deque {
  arr: number[];

  constructor() {
    this.arr = [];

    for (let i = 1; i <= Number(input[0].split(" ")[0]); i++) {
      this.arr.push(i);
    }
  }

  left() {
    const first: number = this.arr[0];
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.arr[this.arr.length - 1] = first;
  }

  right() {
    const last: number = this.arr[this.arr.length - 1];
    for (let i = this.arr.length - 1; i >= 0; i--) {
      this.arr[i] = this.arr[i - 1];
    }
    this.arr[0] = last;
  }

  shift() {
    const first: number = this.arr[0];
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.arr.pop();

    return first;
  }
}

const left = new Deque();
const right = new Deque();
let count: number = 0;
const location: number[] = input[1].split(" ").map(Number);

for (let i: number = 0; i < location.length; i++) {
  let l: number = 0;
  while (location[i] !== left.arr[0]) {
    left.left();
    l++;
  }

  let r: number = 0;
  while (location[i] !== right.arr[0]) {
    right.right();
    r++;
  }

  if (l < r) {
    count += l;
  } else {
    count += r;
  }

  left.shift();
  right.shift();
}

console.log(count);
