/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const freq = {};
    
    for (const num of nums) {
        if (freq[num] === undefined) {
            freq[num] = num;
        } else {
            return true;
        }
    }

    return false;
};