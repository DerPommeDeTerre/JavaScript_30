// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 
// let init = 5;

// let createCounter = function(init){
//     let value = init;
//     return {
//         increment: function(){
//             value += 1;
//             console.log(value);
//             return value;
//         },

//         decrement: function(){
//             value -= 1;
//             console.log(value);
//             return value;
//         },

//         reset: function(){
//             value = init;
//             console.log(value);
//             return value;
//         }
//     }
// }

// const counter = createCounter(init);
// counter.increment();
// counter.decrement();
// counter.reset();

// let createCounter = (init) => {
//     let value = init;
//     return {
//         increment: () => {
//             value += 1;
//             return value;
//         },

//         decrement:() =>{
//             value -= 1;
//             return value;
//         },

//         reset:() => {
//             value = init;
//             return value;
//         }
//     }
// }
//----------WRONG-------------------
// Concise body with ()	❌ No	() => ({ key: value })

// Full body with {} + return	✅ Yes	() => { let x = 5; return obj; }


// let createCounter = (init) => ({
//     increment: () => ++init,
//     increment: () => --init,
//     increment: () => init = init

// })

let createCounter = (init) => {
    let value = init;
    let original = init;
    return{
    increment: () => ++value,
    decrement: () => --value,
    reset: () => {
        value = original;
        return value;
    }
    }
}