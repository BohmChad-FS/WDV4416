// Create tests for a module that will obscure credit card numbers except the last 4 digits.
// Test to make sure the function obscures credit card numbers that are bewteen the length of 12-16 digits
// input: 123456789012
// output: XXXXXXXX9012

const mask = require("./mask");

describe("Mask Credit Card", ()=>{
    test("As a user I want my credit info masked except the last four digits",()=>{
        expect(mask("123456789012")).toEqual("********9012")
    })
})

describe("Mask Credit Card", ()=>{
    test("As a user I want my credit info masked except the last four digits",()=>{
        expect(mask("1234567890123456")).toBe("************3456")
    })
})

describe("Mask Credit Card", ()=>{
    test("As a user I want my credit info masked except the last four digits",()=>{
        expect(mask("12345678901234")).toBe("**********1234")
    })
})

describe("Mask Credit Card", ()=>{
    test("As a user I want to know if my card info is invalid",()=>{
        expect(mask("12345678901")).toBe("Invalid Credit Card Info")
    })
})