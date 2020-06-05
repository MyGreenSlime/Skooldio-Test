const Encode = require('./encode')

test('Test one character', ()=>{
    expect(Encode("S")).toBe("S1")
})

test('Test string only one charater', ()=>{
    expect(Encode("SSSSSSSSSSSSSSSS")).toBe("S16")
})

test('Test normal string', ()=>{
    expect(Encode("ruksachaionglaor")).toBe("r1u1k1s1a1c1h1a1i1o1n1g1l1a1o1r1")
})

test("Test string with some charater duplicate", () => {
    expect(Encode("doooooooooon")).toBe("d1o10n1")
})

test('Test mix Lower case & Upper case', () => {
    expect(Encode("DonRuksachai")).toBe("D1o1n1R1u1k1s1a1c1h1a1i1")
})

test('Test String with number', () => {
    expect(Encode("111")).toBe("13")
})