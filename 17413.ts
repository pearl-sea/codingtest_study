import * as fs from "fs";
const input: string = fs.readFileSync("./input.txt").toString().trim();

let output: string = "";
let stack: string[] = [];

let i: number = 0;

while (output.length < input.length) {
  stack.push(input[i]);

  if (input[i] === ">" && stack[0] === "<") {
    output += stack.join("");
    stack = [];
  } else if ((input[i] === "<" && stack[0] !== "<") || input[i] === undefined) {
    stack.pop();
    output += stack.pop();
    i--;
  } else if (input[i] === " " && stack[0] !== "<") {
    stack.pop();
    output += stack.pop();

    if (stack.length < 1) {
      output += " ";
    } else {
      i--;
    }
  }

  i++;

  // console.log(`stack`, stack);
  // console.log(`output`, output);
}

console.log(output.trim());
