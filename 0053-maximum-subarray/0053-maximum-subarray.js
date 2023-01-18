/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const N = nums.length;
    
    let max = nums[0];
    let best = nums[0];
    
    for (let i = 1; i < N; i += 1) {
        max = Math.max(max + nums[i], nums[i]);
        if (best < max) best = max;
    }
    
    return best;
};