import * as fs from "fs";
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const all = Number(input[0]);
const kim = Number(input[1]);
const yim = Number(input[2]);

const memberArr = [];
let count = 0;

for (let i = 1; i <= all; i++) {
  i + 1 <= all ? memberArr.push([i, i + 1]) : memberArr.push([i]);

  i++;
}

function makeNewArray(arr: number[]) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    i + 1 < arr.length ? result.push([arr[i], arr[i + 1]]) : result.push([arr[i]]);
    i++;
  }

  return result;
}

function recursion(memberArr: number[][]) {
  const newRoundMember = [];

  count += 1;

  for (let i = 0; i < memberArr.length; i++) {
    if (
      (memberArr[i][0] === kim && memberArr[i][1] === yim) ||
      (memberArr[i][1] === kim && memberArr[i][0] === yim) ||
      memberArr.length === 1
    ) {
      return;
    }

    if (memberArr[i][0] === kim || memberArr[i][0] === yim) {
      newRoundMember.push(memberArr[i][0]);
    } else if (memberArr[i][1] === kim || memberArr[i][1] === yim) {
      newRoundMember.push(memberArr[i][1]);
    } else {
      newRoundMember.push(memberArr[i][0]);
    }
  }

  const newArr = makeNewArray(newRoundMember);
  recursion(newArr);
}

recursion(memberArr);

console.log(count);
