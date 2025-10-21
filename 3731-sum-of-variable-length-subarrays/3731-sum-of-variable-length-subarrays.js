/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    const N = nums.length;

    const array = Array(N).fill(0);

    const prefixSum = Array(N).fill(0);
    prefixSum[0] = nums[0];
    for (let i = 1; i < N; i += 1) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }

    let sum = 0;

    for (let i = 0; i < N; i += 1) {
        const start = Math.max(0, i - nums[i]);
        if (i === start) sum += prefixSum[i];
        else {
            sum += prefixSum[i] - prefixSum[start] + nums[start];
        }
    }
    
    return sum;
};