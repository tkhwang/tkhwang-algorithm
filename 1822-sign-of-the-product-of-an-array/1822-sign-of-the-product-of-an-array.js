/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const product = nums.reduce((acc, cur) => acc * cur, 1);
    
    return product > 0 ? 1 :
           product < 0 ? -1 : 0;
};