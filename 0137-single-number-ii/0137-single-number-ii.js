/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const has = {};
    for (const num of nums) {
        has[num] = (has[num] || 0) + 1
    }
    
    const keys = Object.keys(has);
    const key = keys.filter((key) => has[key] === 1);
    
    return key[0];
};