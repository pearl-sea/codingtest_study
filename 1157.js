const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().toUpperCase().split('')
console.log(input)

const count = {}
let result = ''

if (input.length === 1 ){
    result = input
}

for (let i = 0; i < input.length; i++){    

    if (count[input[i]] === undefined){
        count[input[i]] = 0
    }

    if (input[i] in count){
        count[input[i]]++
    }
}

if (Object.keys(count).length === 1) {
    result = input[0]
}

const arr = []

for (let key in count){

    if (arr[0] === undefined){
        arr.push(count[key])
        result = key
    } 

    if (arr[0] < count[key]){
        arr[0] = count[key]
        result = key
    } 
}    

if (Object.values(count).filter(el=>el === arr[0]).length > 1) {
    result = '?'
}

console.log(result)