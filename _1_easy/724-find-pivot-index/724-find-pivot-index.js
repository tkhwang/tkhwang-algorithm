/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const N = nums.length;
    
    const prefixSum = Array(N).fill(0);
    const suffixSum = Array(N).fill(0);
    
    let sum = 0;
    for (let i = 0; i < N; i += 1) {
        sum += nums[i];
        prefixSum[i] = sum;
    }
    
    sum = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        sum += nums[i];
        suffixSum[i] = sum;
    }
    
    for (let i = 0; i < N; i += 1) {
        if (prefixSum[i] === suffixSum[i]) return i
    }
    return -1;
};