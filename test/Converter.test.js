const {Encoder} = require('../modules/converter')
describe('Encoder ' , () => {
    test('Test one character', ()=>{
        expect(Encoder("S")).toBe("S1")
    })
    
    test('Test string only one charater', ()=>{
        expect(Encoder("SSSSSSSSSSSSSSSS")).toBe("S16")
    })
    
    test('Test normal string', ()=>{
        expect(Encoder("ruksachaionglaor")).toBe("r1u1k1s1a1c1h1a1i1o1n1g1l1a1o1r1")
    })
    
    test("Test string with some charater duplicate", () => {
        expect(Encoder("doooooooooon")).toBe("d1o10n1")
    })
    
    test('Test mix Lower case & Upper case', () => {
        expect(Encoder("DonRuksachai")).toBe("D1o1n1R1u1k1s1a1c1h1a1i1")
    })
    
    test('Test string with number', () => {
        expect(Encoder("111")).toBe("13")
    })
})
