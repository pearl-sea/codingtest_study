let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
input = input.slice(0, input.length - 1);

for (let arr of input) {
  arr = arr.split('');

  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    let mid = -1;

    if (arr.length % 2 === 1 && arr.length > 2) {
      mid = Math.floor(arr.length / 2);
      arr.splice(mid, 1);
    }

    if (stack.length !== 0 && stack[stack.length - 1] === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  if (arr.length === 1) {
    console.log('yes');
  } else {
    console.log(stack.length === 0 ? 'yes' : 'no');
  }
}

//풀기 전 생각
//스택으로 풀어도 될 거 같다.
//배열의 길이가 홀수이면 mid값 제거 후 비교.

//풀고 난 생각
//1글자로 된 케이스도 yes였다..