/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const N = nums.length;
    
    if (N < 2) return 0;
    
    nums.sort((a,b) => a - b);
    
    let max = -Infinity;
    
    for (let i = 1; i < N; i += 1) {
        max = Math.max(max, nums[i] - nums[i-1]);
    }
    
    return max;
};