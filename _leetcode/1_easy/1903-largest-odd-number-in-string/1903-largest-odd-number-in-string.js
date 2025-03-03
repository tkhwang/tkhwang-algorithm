/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const N = num.length;
    
    let right = N - 1;

    while (right >= 0 && num[right] % 2 === 0) right -= 1;
    
    if (right === -1) return "";
    
    return num.slice(0, right + 1);
    
};