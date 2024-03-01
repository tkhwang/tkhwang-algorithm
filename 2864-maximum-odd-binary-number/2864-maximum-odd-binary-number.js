/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const ones = [];
    const zeros = [];
    const result = [];
    
    for (const num of s) {
        if (num === '0') zeros.push(+num) 
        else ones.push(+num);
    }
    
    while (ones.length > 1) {
        result.unshift(ones.pop());
    }
    
    while (zeros.length > 0) {
        result.push(zeros.pop());
    }
    
    result.push(ones.pop());
    
    return result.join("");
};

