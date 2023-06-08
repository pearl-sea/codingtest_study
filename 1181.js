const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const arr = input.slice(1)

function mergeSort(arr){
    if  (arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length /2);
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const merged = [];

    while (left.length && right.length){
        if (left[0].length < right[0].length) {
            merged.push(left.shift())
            
        } else if ((left[0].length > right[0].length)) {
            merged.push(right.shift())

        } else {
            if (left[0] < right[0]) {
                merged.push(left.shift())
            } else {
                merged.push(right.shift())
            }
        }
    }

    return merged.concat([...left, ...right])
}

const sortedArr = mergeSort(arr);
const uniqueArr = [sortedArr[0]];

for (let i = 1; i < sortedArr.length; i++){
    if (sortedArr[i] !== sortedArr[i-1]) {
        uniqueArr.push(sortedArr[i]);
    }
}
console.log(uniqueArr.join('\n'));