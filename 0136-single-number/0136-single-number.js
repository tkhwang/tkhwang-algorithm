/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum = 0;
    
    for (const num of nums) {
        sum ^= num;
    }
    
    return sum;
};