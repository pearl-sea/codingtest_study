const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n')

let lineCount = input[0]

for (let i = 1; i<=lineCount; i++){
    
    let scoreArray = input[i].split(' ')
    let personCount = scoreArray.shift();
    let sumScore = 0;
    let sumPercentage = 0;

    for (let score of scoreArray){
        sumScore += +score
    }

    let avarage = (sumScore / personCount)
    let percentage = (100 / personCount)

    for (let score of scoreArray){
        if (+score > avarage){
            sumPercentage += percentage 
        }
    }

    console.log( sumPercentage.toFixed(3) + '%')
}

