// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  arr = []
  
  for(let i = 0; i < num; i++ ){
    newString = ""
    
    newString = [i + 1] + " sheep..."
    
    arr.push(newString)
  }
  
  let conca = arr.join("")
  console.log(conca)
}

console.log(countSheep(5))

// var countSheep = function (num){
//     let accString = [];
//     for(let i=0; i<num; i++){

//         accString.push((i+1) + " sheep... ");
//     }

//     return accString.join("")

// }

// console.log(countSheep(3));