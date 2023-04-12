/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const N = nums.length;

    const queue = [];
    
    let max = -Infinity;
    let min = Infinity;
    let res = 0;
    for (const num of nums) {
        queue.push(num);
        max = Math.max(max, num);
        min = Math.min(min, num);
        while (max - min > limit) {
            queue.shift();
            max = -Infinity;
            min = Infinity;
            for (let i = 0; i < queue.length; i += 1) {
                max = Math.max(max, queue[i]);
                min = Math.min(min, queue[i]);
            }
        }
        if (max - min <= limit) {
            if (res < queue.length) res = queue.length;
        }
    }
    return res;
};