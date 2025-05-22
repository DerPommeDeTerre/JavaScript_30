// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
let arr = ['5', '0', 9, 3, 2, 1, '9', 6, 7]

function sumMix(x){

    //As th MAP method creates a new array, creating a new one to push the values is not neccesary
    let converted = x.map(function(element){
        return num = Number(element)    
})
    //The REDUCE method returns the accumulated result
    //ACC (accumulator), CV(Current Value)
let sum = converted.reduce(function(acc,cv){
    return acc + cv
})

return sum

}

console.log(sumMix(arr));
