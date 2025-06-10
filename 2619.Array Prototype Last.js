
let nums = [null, {}, 3]

Array.prototype.last = function() {
    let result = this[this.length - 1];
    if(result === undefined){
        return -1;
    }
    return result;
};
console.log(nums.last());

