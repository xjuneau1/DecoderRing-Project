const {substitution} = require('../src/substitution')
const {expect} = require('chai')

describe("substitution() error handling", ()=>{
    it("should return false if user alphabet is not 26 characters long", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxc")
        expect(actual).to.be.false
    })
    it("should return false if user alphabet is not given", ()=>{
        const actual = substitution("hello world")
        expect(actual).to.be.false
    })
    it("should return false if the user alphabet has any duplicate characters", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxqwert")
        expect(actual).to.be.false
    })
})
//qwertyuiopasdfghjklzxcvbnm
describe("substitution() encoding", ()=>{
    it("should encode a message by using the given alphabet", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnm")
        const expected = "itssg vgksr"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnm")
        const expected = "itssg vgksr"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", ()=>{
        const actual = substitution("Hello world", "qwertyuiopasdfghjklzxcvbnm")
        const expected = "itssg vgksr"
        expect(actual).to.equal(expected)
    })
    it("should work with any user alphabet which include unique keys or symbols", ()=>{
        const actual = substitution("thinkful", "q(er!yu.opasdfghjklzxcvbnm")
        const expected = "z.ofayxs"
        expect(actual).to.equal(expected)
    })
})

describe("substitution() decoding", ()=>{
    it("should decode a message by using the given alphabet ", ()=>{
        const actual = substitution("itssg vgksr", "qwertyuiopasdfghjklzxcvbnm", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is", ()=>{
        const actual = substitution("itssg vgksr", "qwertyuiopasdfghjklzxcvbnm", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("should work with any user alphabet which include unique keys or symbols", ()=>{
        const actual = substitution("z.ofayxs", "q(er!yu.opasdfghjklzxcvbnm", false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
})