const sum = require("./sum")

test("properly adds two numbers", function(){
    expect(sum(1,2))
    .toBe(3)
})