/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const freq = {};
    
    for (const num of nums) {
        if (freq[num] !== undefined) return true;
        else freq[num] = 1;
    }
    return false;
};