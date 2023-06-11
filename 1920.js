const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const n = input[1].split(' ');
const m = input[3].split(' ');
n.sort();

function binarySearch(arr, el, start, end) {
  if (start > end) {
    return '0';
  }

  const mid = Math.floor((start + end) / 2);

  if (el === arr[mid]) {
    return '1';
  } else if (el < arr[mid]) {
    return binarySearch(arr, el, 0, mid - 1);
  } else {
    return binarySearch(arr, el, mid + 1, end);
  }
}

let output = '';
for (let i = 0; i < m.length; i++) {
  if (i === m.length - 1) {
    output += binarySearch(n, m[i], 0, n.length - 1);
  } else {
    output += binarySearch(n, m[i], 0, n.length - 1) + '\n';
  }
}

console.log(output);
