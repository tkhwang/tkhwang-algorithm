/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    for (const [ i, num ] of nums.entries()) {
        if (obj[target - num] !== undefined) return [ obj[target - num], i ];
        obj[num] = i;
    }
};