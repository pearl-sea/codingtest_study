import * as fs from 'fs';

const input: string[] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const arr: string[] = input.slice(1);

const queue: string[] = [];
let front: number = -1;
let rear: number = -1;

let output: string = '';

for (let el of arr) {
  const command: string = el.split(' ')[0];
  const value: string = el.split(' ')[1];

  switch (command) {
    case 'push':
      rear++;
      queue.push(value);
      break;

    case 'pop':
      if (front === rear) {
        output += '-1' + ',';
      } else {
        front++;
        output += queue[front] + ',';
      }
      break;

    case 'size':
      output += rear - front + ',';
      break;

    case 'empty':
      if (front === rear) {
        output += '1' + ',';
      } else {
        output += '0' + ',';
      }
      break;

    case 'front':
      if (front === rear) {
        output += '-1' + ',';
      } else {
        output += queue[front + 1] + ',';
      }
      break;

    case 'back':
      if (front === rear) {
        output += '-1' + ',';
      } else {
        output += queue[rear] + ',';
      }
      break;

    default:
      break;
  }
}

console.log(
  output
    .split(',')
    .join('\n')
    .slice(0, output.length - 1)
);

//풀고 난 생각
//큐와 관련된 문제가 나왔을때 shift()를 쓸 생각은 하지 않는게 좋을 것 같다. 왜 front랑 rear라는 개념이 나왔는지 생각해 볼 수 있었다.
//입력값이 큰 수 일때 반복문 안에서 console.log를 출력하는것은 나쁜 습관이다.
