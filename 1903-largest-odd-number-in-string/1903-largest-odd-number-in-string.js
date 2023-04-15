/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const N = num.length;
    
    for (let i = N - 1; i >= 0; i -= 1) {
        const cur = Number(num[i]);
        if (cur % 2 === 0) continue;
        
        return num.slice(0, i + 1);
    }
    
    return "";
};