/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const obj = {};
    for (const num of nums) {
        if (obj[num] !== undefined) return true;
        
        obj[num] = true;
    }
    return false;
};