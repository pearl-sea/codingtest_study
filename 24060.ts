import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const a: number[] = input[1].split(" ").map(Number);
const k: number = Number(input[0].split(" ")[1]);

let count: number = 0;
let answer: number = -1;
function merge_sort(a: number[], start: number, end: number) {
  if (start < end) {
    const mid: number = Math.floor((start + end) / 2);
    merge_sort(a, start, mid);
    merge_sort(a, mid + 1, end);
    merge(a, start, mid, end);
  }
}

function merge(a: number[], start: number, mid: number, end: number) {
  let index: number = 0;
  const tmp: number[] = new Array(end - start + 1); //임시 배열

  let i: number = start; //왼쪽 배열 인덱스
  let j: number = mid + 1; //오른쪽 배열 인덱스

  while (i <= mid && j <= end) {
    if (a[i] <= a[j]) {
      tmp[index] = a[i];
      i++;
    } else {
      tmp[index] = a[j];
      j++;
    }
    index++;
  }

  while (i <= mid) {
    tmp[index] = a[i];
    index++;
    i++;
  }

  while (j <= end) {
    tmp[index] = a[j];
    index++;
    j++;
  }

  i = start;
  let t: number = 0;

  while (i <= end) {
    // console.log(count, a, tmp[t]);

    if (count + 1 === k) {
      answer = tmp[t];
    }

    a[i] = tmp[t];
    i++;
    t++;
    count++;
  }
}

merge_sort(a, 0, a.length - 1);
console.log(answer);
