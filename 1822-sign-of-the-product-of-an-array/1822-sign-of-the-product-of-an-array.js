/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const product = nums.reduce((a,b) => a * b, 1);
    
    if (product > 0) return 1;
    if (product < 0) return -1;
    return 0;
};