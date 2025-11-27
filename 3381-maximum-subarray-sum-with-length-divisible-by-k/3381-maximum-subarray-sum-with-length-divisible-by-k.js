/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    const N = nums.length;

    let prefixSum = 0;
    let maxSum = -Infinity;
    
    let kSum = Array(k).fill(Infinity);
    kSum[k - 1] = 0;

    for (let i = 0; i < N; i += 1) {
        prefixSum += nums[i];
        maxSum = Math.max(
            maxSum,
            prefixSum - kSum[i % k]
        )
        kSum[i % k] = Math.min(
            kSum[i % k],
            prefixSum
        )
    }
    return maxSum;
};