import * as fs from "fs";
const input: string[][] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "))
  .slice(1);

interface Type {
  arr: number[];
}

class Deque implements Type {
  arr: number[];

  constructor() {
    this.arr = [];
  }

  push_front(x: number) {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      this.arr[i + 1] = this.arr[i];
    }
    this.arr[0] = x;
  }

  push_back(x: number) {
    this.arr.push(x);
  }

  pop_front() {
    if (this.arr.length < 1) {
      return -1;
    }
    const first = this.arr[0];
    this.arr = this.arr.splice(1);
    return first;
  }

  pop_back() {
    if (this.arr.length < 1) {
      return -1;
    }
    return this.arr.pop();
  }

  size(): number {
    return this.arr.length;
  }

  empty(): number {
    return this.arr.length > 0 ? 0 : 1;
  }

  front() {
    if (this.arr.length < 1) {
      return -1;
    }
    return this.arr[0];
  }

  back() {
    if (this.arr.length < 1) {
      return -1;
    }
    return this.arr[this.arr.length - 1];
  }
}

const deque = new Deque();
let answer: string = "";

for (let i = 0; i < input.length; i++) {
  switch (input[i][0]) {
    case "push_front":
      deque.push_front(Number(input[i][1]));
      break;

    case "push_back":
      deque.push_back(Number(input[i][1]));
      break;

    case "pop_front":
      answer += deque.pop_front() + "\n";
      break;

    case "pop_back":
      answer += deque.pop_back() + "\n";
      break;

    case "size":
      answer += deque.size() + "\n";
      break;

    case "empty":
      answer += deque.empty() + "\n";
      break;

    case "front":
      answer += deque.front() + "\n";
      break;

    case "back":
      answer += deque.back() + "\n";
      break;

    default:
      break;
  }
}

console.log(answer.slice(0, answer.length - 1));
