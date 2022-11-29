const total = require("./total");
// Create a module that takes in 3 prices in an array returns the total

describe("Total Module tests", ()=>{
    test("As a user I want to be able to get the total after submitting various prices",()=>{
        expect(total([2.5, 78.12, 12.89])).toEqual(93.51)
    })
})