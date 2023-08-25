import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n").slice(1);

let arr: number[][] = [];
for (let i: number = 0; i < input.length; i++) {
  const newarr: number[] = input[i].split(" ").map((el) => Number(el));

  arr.push(newarr);
}

function mergeSort(arr: number[][], start: number, end: number) {
  if (start >= end) {
    return arr;
  }
  const mid: number = Math.floor((start + end) / 2);

  mergeSort(arr, mid + 1, end);
  mergeSort(arr, start, mid);
  merge(arr, start, mid, end);
}

function merge(arr: number[][], start: number, mid: number, end: number) {
  const result = [];
  let i: number = start;
  let j: number = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i][0] < arr[j][0] || (arr[i][0] === arr[j][0] && arr[i][1] < arr[j][1])) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    result.push(arr[i]);
    i++;
  }

  while (j <= end) {
    result.push(arr[j]);
    j++;
  }

  for (let k = start; k <= end; k++) {
    arr[k] = result[k - start];
  }
}

mergeSort(arr, 0, arr.length - 1);

let answer: string = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i].join(" ") + "\n";
}
console.log(answer.slice(0, answer.length - 1));
