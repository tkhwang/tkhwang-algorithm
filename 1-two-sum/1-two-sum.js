/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const N = nums.length;
    const cache = {};
    
    for (const [i, num] of nums.entries()) {
        if (cache[target - num] !== undefined) {
            return [i, cache[target - num]];
        } else {
            cache[num] = i;
        }
    }
    return [-1, -1];
};