import * as fs from "fs";
const input: number = Number(fs.readFileSync("./input.txt").toString().trim());
const queue: number[] = [];

let front: number = -1;
let rear: number = -1;

for (let i = 1; i <= input; i++) {
  queue.push(i);
  rear++;
}

while (rear - front > 1) {
  front++;
  // console.log(`반복문 시작 ${queue.slice(front)}`);
  // console.log(`front: ${front}`);
  // console.log(`${front} % ${2}`, front % 2 === 1);

  if (front % 2 === 1) {
    //front가 홀수일때는 카드 아래로 옮기기, 짝수일때는 카드 제거만 하기
    queue.push(queue[front]);
    rear++;
  }

  // console.log(`반복문 끝 ${queue.slice(front + 1, rear + 1)}`);
  // console.log(`-------------------------------------`);
}

console.log(queue[front + 1]);
