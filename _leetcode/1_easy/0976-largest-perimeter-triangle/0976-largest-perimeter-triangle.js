/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    for (let i = N - 3; i >= 0; i -= 1) {
        if (nums[i] + nums[i+1] > nums[i+2]) return nums[i] + nums[i+1] + nums[i+2];
    }
    
    return 0;
};