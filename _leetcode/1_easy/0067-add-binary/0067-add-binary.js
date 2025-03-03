/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(_a, _b) {
    const a = _a.split("").reverse().join("");
    const b = _b.split("").reverse().join("");
    
    const BASE = 2;
    const N = Math.max(a.length, b.length);
    let carry = 0;
    let res = "";
    
    for (let i = 0; i < N; i += 1) {
        let sum = Number(a[i] || 0) + Number(b[i] || 0) + carry;
        res += sum % BASE;
        carry = Math.floor(sum / BASE);
    }
    
    if (carry) res += "1";
    
    return res.split("").reverse().join("");
};