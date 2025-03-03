/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const queue = [];
    const res = [];
    for (let i = 0; i < n; i += 1) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) queue.pop();
        queue.push(i)
        
        if (queue[0] === i - k) queue.shift();
        
        if (i >= k - 1) res.push(nums[queue[0]]);
    }
    return res;
};