const {caesar} = require('../src/caesar')
const {expect} = require('chai')

describe("caesar() error handling", ()=>{
    it("should return false if shift parameter is not given", ()=>{
        const actual = caesar("thinkful")
        expect(actual).to.be.false
    })
    it("should return false if shift parameter is above 25", ()=>{
        const actual = caesar("thinkful", 26)
        expect(actual).to.be.false
    })
    it("should return false if shift parameter is below -25", ()=>{
        const actual = caesar("thinkful" -26)
        expect(actual).to.be.false
    })
    it("should return false if shift parameter is equal to 0", ()=>{
        const actual = caesar("thinkful", 0)
        expect(actual).to.be.false
    })
})

describe("caesar() encoding", ()=>{
    it("should encode a message by shifting the letters", ()=>{
        const actual = caesar("thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.equal(expected)
    })
    it("should leave symbols and spaces as is", ()=>{
        const actual = caesar("think ful!", 3)
        const expected = "wklqn ixo!"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", ()=>{
        const actual = caesar("Thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.equal(expected)
    })
    it("should wrap shifted letters at the end of the alphabet to the beginning", ()=>{
        const actual = caesar("thinkfulz", 3)
        const expected = "wklqnixoc"
        expect(actual).to.equal(expected)
    })
    it("should wrap shifted letters at the beginning of the alphabet to the end", ()=>{
        const actual = caesar("athinkful", 3)
        const expected = "dwklqnixo"
        expect(actual).to.equal(expected)
    })
})

describe("caesar() decoding", ()=>{
    it("should decode a message by shifting in the opposite direction", ()=>{
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
    it("should leave symbols and spaces as is", ()=>{
        const actual = caesar("wklqn ixo!", 3, false)
        const expected = "think ful!"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", ()=>{
        const actual = caesar("Wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
    it("should wrap shifted letters at the end of the alphabet to the beginning", ()=>{
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
    it("should wrap shifted letters at the beginning of the alphabet to the end", ()=>{
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
})