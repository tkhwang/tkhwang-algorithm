/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const N = nums.length;
    
    const prefixSum = [ nums[0] ];
    
    for (let i = 1; i < N; i += 1) {
        prefixSum.push(prefixSum[i-1] + nums[i]);
    }
    
    return prefixSum;
};