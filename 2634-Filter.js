//-----Example 1
const arr = [0,10,20,30]

let fn = function greaterThan10(n){
    return n > 10;
}// [20,30]
 //-----Example 2
 const arr2 = [1,2,3]

let fn2 = function firstIndex(n2,i){
    return i2 === 0;
}//[1]
//-----Example 3
const arr3 = [-2,-1,0,1,2]

let fn3 = function plusOne(n3){
    return n3 + 1;
}//[-2,0,1,2]

//----------HINT

var filter = function(arr, fn){
    let result = [];

    for(i of arr){
        if(fn(i)){
            result.push(i);
        }
    }
  
    return result;
}

console.log(filter(arr, fn));
// -----Solution with FOREACH-----
// var filter = function(arr, fn){
//     let result = [];

//   arr.forEach(function(element, i, arr){
//         if(fn(element, i)){
//             result.push(element);
//         }
//     });
  
//     return result;
// }
//-----Solution with MAP-----
// var filter = function(arr, fn){
//     let result = [];

//     arr.map(function(element, i, arr){
//         if(fn(element)){
//             result.push(element);
//         }
//     })
  
//     return result;
// }
