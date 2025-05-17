// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// var reduce = function(nums, fn, init) {
    
// };

//-------Example 1
const nums1 = [1,2,3,4];
init1 = 0;

fn1 = function sum1(accum, curr){
    return accum + curr;
}//10

//-------Example 2
const nums2 = [1,2,3,4];
const init2 = 100;

fn2 = function sum2(acumm, curr){
    return acumm + (curr * curr);
}//130

//-------Example 3
const nums3 = [];
init3 = 25;

fn3 = function sum3(acucum, curr){
    return 0;
}//25

//-------HINT
// var reduce = function(nums2, fn2, init2){
//     return nums2.reduce(fn2, init2);
// };



var reduce = function(nums1, fn1, init1){
    let result = init1; //This is going to be the accumulator

    nums1.forEach(function(element){
        result = fn1(result, element) //ELEMENT is the current position in the array
        console.log(result);
    })


    return result;

};
console.log(reduce(nums1, fn1, init1) + " b");

