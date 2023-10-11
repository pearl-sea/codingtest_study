import * as fs from "fs";
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);
const stairs = input.slice(1);

const sumScore = (stairs: number[]) => {
  const n = stairs.length;

  const dp = [];
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
  // dp[3] = Math.max(stairs[0] + stairs[2] + stairs[3], stairs[0] + stairs[1] + stairs[3]);
  // dp[4] = Math.max(
  //   stairs[0] + stairs[1] + stairs[3] + stairs[4] = dp[1] + stairs[3] + stairs[4],
  //   stairs[0] + stairs[2] + stairs[4] = dp[2] + stairs[4],
  //   stairs[1] + stairs[2] + stairs[4] = dp[2] + stairs[4],
  //   stairs[1] + stairs[3] + stairs[4] = dp[1] + stairs[3] + stairs[4],
  // );
  //즉 dp[4]는 dp[1] + stairs[3] + stairs[4] 이거나 dp[2]+ stairs[4]

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 3] + stairs[i - 1] + stairs[i]);
  }

  return dp[n - 1];
};

console.log(sumScore(stairs));
