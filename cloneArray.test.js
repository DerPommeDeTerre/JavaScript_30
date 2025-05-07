const cloneArray = require("./cloneArray")

test("Verify array", function(){
    const array = [1,2,3];
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})