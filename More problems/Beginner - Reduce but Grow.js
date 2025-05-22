// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const arr = [1, 2, 3, 4]
//--------Third Attempt FOR IN
function grow(x){
    let result = 1;

    for(i in x){
        result = result * x[i] //x[i] is the value of each element, i is the position
    }

    return result
}
//--------Second Attempt FOR OF
// function grow(x){
//     let result = 1;

//     for(i of x){
//         result = result * i //i is the value of each element
//     }

//     return result
// }
//---------First Attempt REDUCE---------
// function grow(x){
// let result = x.reduce(function(acc,cv){
//     return acc * cv
// })

// return result
// }

console.log(grow(arr));
