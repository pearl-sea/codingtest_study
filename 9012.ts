import * as fs from "fs";
let input: string[] = fs.readFileSync("./input.txt").toString().trim().split("\n");

const length: number = Number(input[0]);
input = input.slice(1);

for (let i = 0; i < length; i++) {
  const arr: string[] = input[i].split("");

  const stack: string[] = [];
  for (let j = 0; j < arr.length; j++) {
    stack.push(arr[j]);

    if (stack.length > 1 && stack[stack.length - 1] === ")") {
      if (stack[stack.length - 2] === "(") {
        stack.pop();
        stack.pop();
      }
    }
  }

  // console.log("stack", stack);
  console.log(stack.length > 0 ? "NO" : "YES");
}

//4949번 문제가 이 문제와 비슷하다.
