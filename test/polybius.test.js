const {polybius} = require('../src/polybius')
const {expect} = require('chai')

describe("polybius() error handling", ()=>{
    it("should return false when decoding if input is not an even number of characters", ()=>{
        const actual = polybius("325113134 2543241341", false)
        expect(actual).to.be.false
    })
    it("should return false if input is not given", ()=>{
        const actual = polybius()
        expect(actual).to.be.false
    })
})

describe("polybius() encoding", ()=>{
    it("should encode a message using number pairs", ()=>{
        const actual = polybius("hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("should change both i and j to 42", ()=>{
        const actual = polybius("i j")
        const expected = "42 42"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is", ()=>{
        const actual = polybius("hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
})

describe("polybius() decoding", ()=>{
    it("should decode a message into letters using number pairs", ()=>{
        const actual = polybius("3251131343 2543241341", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("should change 42 into 'i/j'", ()=>{
        const actual = polybius("42 42", false)
        const expected = "i/j i/j"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is", ()=>{
        const actual = polybius("3251131343 2543241341", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
})