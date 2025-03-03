/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;

    let left = 0;
    let right = 0;
    let steps = 0;
    
    while (right < n - 1 ) {
        let localMax = -Infinity;
        for (let i = left; i <= right; i += 1) {
            localMax = Math.max(localMax, i + nums[i])
        }
        left = right + 1;
        right = localMax;
        steps += 1;
    }
    
    return steps;
};