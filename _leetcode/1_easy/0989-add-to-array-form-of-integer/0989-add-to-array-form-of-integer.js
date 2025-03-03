/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(_num, _k) {
    const num = _num.reverse();
    const k = String(_k).split("").map(Number).reverse();
    
    const N = Math.max(num.length, k.length);
    let carry = 0;
    const res = Array(N).fill(0);
    const BASE = 10;
    
    for (let i = 0; i < N; i += 1) {
        const sum = carry + (num[i] || 0) + (k[i] || 0);
        res[i] = sum % BASE;
        carry = Math.floor(sum / BASE);
    }
    
    if (carry) res.push(carry);
    
    return res.reverse();
};