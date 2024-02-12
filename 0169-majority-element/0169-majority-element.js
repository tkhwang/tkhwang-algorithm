/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    return nums[Math.floor(N/2)];    
};