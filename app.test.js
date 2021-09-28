const { expect } = require("@jest/globals")
const stringCount = require('./app')
const reverseString = require('./reverseString')


test('stringCount works',()=>{
    expect(stringCount("adbcs")).toBe(5)
})


test('function work',()=>{
    expect(stringCount("a")).toBe('Character length invalid: it should be more than 1 and less than 10')
    expect(stringCount("adbcssdkjhsdkajsd")).toBe('Character length invalid: it should be more than 1 and less than 10')
})

test('reverseString works',()=>{
    expect(reverseString("hello")).toBe('olleh')
})