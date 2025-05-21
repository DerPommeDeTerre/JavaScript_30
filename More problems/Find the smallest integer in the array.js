// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const arr1 = [34, 15, 88, 2]
const arr2 = [34, -345, -1, 100]

function findSmallestInt(arr) {

  let minValue = arr[0]

    for(let i of arr){
      if(i < minValue){
        minValue = i;
      }
    }

    return minValue
}


console.log(findSmallestInt(arr1));

// function findSmallestInt(arr) {

//     let smallest = Math.min(...arr1);//Converts elements of the array to individual elements

//     console.log(smallest);

//   return 0;
// }