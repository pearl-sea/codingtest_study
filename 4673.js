function sumDigits(n) {
  n = n.toString();
  let sum = Number(n);
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }

  return sum;
}

let notSelfNumSet = new Set();
for (let i = 1; i <= 10000; i++) {
  notSelfNumSet.add(sumDigits(i));
}

let output = '';
for (let i = 1; i <= 10000; i++) {
  if (!notSelfNumSet.has(i)) {
    output += i + '\n';
  }
}

console.log(output);
