const fs = require('fs')
let input = Number(fs.readFileSync('./input.txt').toString())
let count = 0;
let firstNum = input

if (input < 10){
    input = '0' + input
}

let newNum =''

while (firstNum !== newNum) {
    input = `${input % 10}${(Math.floor(input / 10) + input %10) % 10}`
    newNum = Number(input)
    count++
}

console.log(count)
