/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const N = nums.length;
    const prefixSum = Array(N).fill(0);

    let sum = 0;
    for (let i = 0; i < N; i += 1) {
        sum += nums[i];
        prefixSum[i] = sum;
    }
    
    return prefixSum;
};