/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
    let res = 0;
    
    for (const num of nums) {
        res ^= num;
    }
    
    return res;
};