// Given an integer array arr 
// and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that 
// returnedArray[i] = fn(arr[i], i).

//To each value in each position in the array, the function FN is applied.
// The function FN takes the value of the position and the index

// Please solve it without the built-in Array.map method.

//Given Examples

//Example 1
const arr1 = [1,2,3]
fn = function plusOne(n){
    return n + 1;
}
const newArray1 = map(arr, plusOne) //[2,3,4]

//Example 2
const arr2 = [1,2,3]
fn = function plus(n, i){
    return n + i;
}//[1,3,5]

//Example 3
const arr3 = [10,20,30]
fn = function constant(){
    return 42;
}//[42,42,42]

//Knowledge Check
const arr = [5,7,8];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let i of arr){//returns actual element
    console.log(i);
}

for(let i in arr){//returns index
    console.log(i);
    console.log(arr[i]);
}
//This returns the desired values
const map1 = function(arr, fn){
    return arr.map(fn);
}
console.log(map1(arr, plusOne));

//-----HINT-----
var map = function(arr, fn){

    const result = [];
    for(i in arr){
        result.push(fn(arr[i], Number(i)))
    }

    return result;
}
