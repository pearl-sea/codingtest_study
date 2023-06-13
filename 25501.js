const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1);

console.log(input);

let count = 0;
function recursion(s, l, r) {
  //   console.log(`s: ${s}, l: ${l}, r: ${r}`);
  count++;

  if (l >= r) {
    return 1;
  } else if (s[l] !== s[r]) {
    return 0;
  } else {
    return recursion(s, l + 1, r - 1);
  }
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

let i = 0;
while (i < input.length) {
  console.log(`${isPalindrome(input[i])} ${count}`);
  count = 0;
  i++;
}
