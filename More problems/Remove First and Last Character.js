// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

let string = "LKASHDFASEYHHCNESUNCOSkjakdjakdjada"

function removeChar(str){

    if(str < 2){
        return str
    } else {
        return  nS = str.substring(1, str.length - 1)
    }
};

console.log(removeChar(string))