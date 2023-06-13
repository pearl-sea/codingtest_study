const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

if (input.indexOf('.')) input.splice(input.indexOf('.'), 1);

for (let str of input) {
    let stack = []
    str = str.split('')

    let isBalanced = true

    for (let char of str){
        if (char === '(' || char === '['){
            stack.push(char)

        } else if (char === ')'){
            if (stack.length === 0 || stack.pop() !== '(') {
                isBalanced = false
                break
            }
        } else if (char === ']') {
            if (stack.length === 0 || stack.pop() !== '[') {
                isBalanced = false
                break
            }
        }
    }

    if (stack.length > 0) {
        isBalanced = false;
    }
    
    console.log(isBalanced ? 'yes' : 'no')
}

