/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(String(num).length > 1) {
        const nums = String(num).split("").map(Number);
        num = nums.reduce((a,b) => a + b, 0);
    }
    
    return num;
};