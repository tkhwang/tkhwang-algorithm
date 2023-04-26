/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (Math.floor(num/10) > 0) {
        const nums = String(num).split("").map(Number);
        num = nums.reduce((a,b) => a + b, 0);
    }
    
    return num;
};