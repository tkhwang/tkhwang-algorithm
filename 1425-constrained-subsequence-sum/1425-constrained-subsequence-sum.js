/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    const N = nums.length;
    
    const queue = [];
    
    for (let i = 0; i < N; i += 1) {
        nums[i] += queue.length ? queue[0] : 0;
        while (queue.length && nums[i] > queue.at(-1)) queue.pop();
        if (nums[i] > 0) queue.push(nums[i]);
        if (i >= k && queue.length && queue[0] === nums[i-k]) queue.shift()
    }
    
    return Math.max(...nums);
};