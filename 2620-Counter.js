// let array1 = new Array(3);
// let array2 = new Array(5);

const { number } = require("yargs");

// array1[0] = 10;
// array2[0] = -2;

// let result1 = counter(array1);
// let result2 = counter(array2);

// function counter(array){
//     for(i = 1; i < array.length; i++){
//         array[i] = array[i - 1] + 1;
//     }
//     return array;
// }





// function counter(argument){
//     return function(){ //returns a function
//         return argument++; //gunction uses post addition operator
//     };
// }

// function cycle(counterf, argument){
//     for(i = 1; i <= argument; i++){
//         console.log(counterf());
//     }
// }

// let counter1 = counter(10);
// let counter2 = counter(-2); //counter1 is a function that passes an integer parameter

// cycle(counter1, 3);
// cycle(counter2, 5);

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n){
    return function(){
       return n++;
    }
}

let counter = createCounter(10);

let result;
do {
    result = counter();
    console.log(result);
} while (result < 12);