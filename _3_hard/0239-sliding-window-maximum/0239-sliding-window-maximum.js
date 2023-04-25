/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const N = nums.length;
    
    const queue = [];
    const res = [];
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        while (queue.length && queue.at(-1) < cur) queue.pop();
        queue.push(cur);
        
        if (right - left + 1 > k) {
            const leftNum = nums[left];
            if (queue.at(0) === leftNum) queue.shift();
            left += 1;
        }
        
        if (right >= k - 1) {
            res.push(queue.at(0));
        }
    }
    return res;
};