/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const N = nums.length;

    const set = new Set();
    let count = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        count += 1;

        if (nums[i] <= k) set.add(nums[i]);
        if (set.size === k) return count;        
    }
};