import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n");

const arr: number[] = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const findarr: number[] = input[3].split(" ").map(Number);

interface Function<T> {
  (el: T, start: T, end: T): T;
}

const binarySearch: Function<number> = function (el, start, end) {
  if (start > end) {
    return 0;
  }

  const mid: number = Math.floor((start + end) / 2);

  if (el === arr[mid]) {
    return 1;
  } else if (el < arr[mid]) {
    return binarySearch(el, 0, mid - 1);
  } else {
    return binarySearch(el, mid + 1, end);
  }
};

let answer: string = "";
for (let i = 0; i < findarr.length; i++) {
  const isExist: number = binarySearch(findarr[i], 0, arr.length - 1);
  answer += isExist + " ";
}

console.log(answer.slice(0, answer.length - 1));
