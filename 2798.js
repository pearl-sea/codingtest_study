const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n')

let limit = input[0].split(' ')[1]
let arr = input[1].split(' ').sort((a,b)=>a-b).map(el=>Number(el))
let output = [];


for (let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        for(let k= j+1; k< arr.length; k++){

            const sum = arr[i]+arr[j]+arr[k]

            if (sum <= limit){
                // console.log(`${arr[i]}+${arr[j]}+${arr[k]} = ${arr[i]+arr[j]+arr[k]}`)
                output.push(limit - sum)
            }

        }
    }

}
console.log(limit - output.sort((a,b)=>a-b)[0])
