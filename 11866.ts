import * as fs from "fs";
const input: string[] = fs.readFileSync("./input.txt").toString().trim().split(" ");

const n = Number(input[0]);
const k = Number(input[1]);

let front: number = 0;
let rear: number = 0;

let queue: number[] = [];
for (let i = 1; i <= n; i++) {
  queue.push(i);
  rear++;
}

queue.push(null);

let count: number = 0;
let output: number[] = [];

while (output.length < queue.length - 1) {
  if ((count + 1) % k === 0) {
    output.push(queue[front]);
  } else {
    queue[rear] = queue[front];
    rear++;
  }

  delete queue[front];
  front++;

  if (front > queue.length - 1) {
    front = 0;
  }

  if (rear > queue.length - 1) {
    rear = 0;
  }

  //   console.log(queue);
  count++;
}

console.log(`<${output.join(", ")}>`);
