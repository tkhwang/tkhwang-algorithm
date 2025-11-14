/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const N = nums.length;

    const result = [];

    for (let i = 0; i < n; i += 1) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }

    return result;
};