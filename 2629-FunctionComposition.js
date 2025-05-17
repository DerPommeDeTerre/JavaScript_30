// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

//----------Example 1
function f1(value){
    return value + 1
};

function f2(value){
    return value * value;
}

function f3(value){
    return 2 * value;
}

// console.log(f3(4));

const functions = [f1, f2, f3];

// console.log(functions);

//----------HINT
var compose = function(functions){
    return function(x){

        let cresult = x;

        for(let i of functions.reverse()){
             cresult = i(cresult);
        }

        return cresult;
    }
};

const composi = compose(functions);

let result = composi(10);

console.log(result);