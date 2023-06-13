const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const v = parseInt(input[2]);

function solution(a, b, v) {
  let left = 1;
  let right = v - a;
  let answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(`${mid} * ${(a - b)} + ${a} >= ${v}`)

    if (mid * (a - b) + a >= v) {
      right = mid - 1; //while문을 멈추기 위한 조건
      answer = mid;
    } else {
      left = mid + 1; //점점 좁혀지는 탐색범위
    }
  }

  return answer + 1;
}

console.log(solution(a, b, v));
