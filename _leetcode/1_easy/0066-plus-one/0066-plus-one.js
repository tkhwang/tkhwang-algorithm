/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(_digits) {
    const digits = _digits.reverse();
    
    let sum = 0;
    let carry = 1;
    
    for (const [ i, num ] of digits.entries()) {
        sum = num + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        digits[i] = sum;
    }
    
    if (carry) digits.push(carry)
    
    return digits.reverse();
};