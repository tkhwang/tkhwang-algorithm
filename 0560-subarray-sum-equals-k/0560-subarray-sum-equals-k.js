/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const N = nums.length;
    const prefixSum = Array(N).fill(0);
    
    const counts = {};
    counts[0] = 1;
    
    let sum = 0;
    let res = 0;
    
    for (let i = 0; i < N; i += 1) {
        sum += nums[i];
        prefixSum[i] = sum;
        
        if (counts[sum - k] !== undefined) {
            res += counts[sum - k];
        } 
        counts[sum] = (counts[sum] || 0) + 1;
    }
    
    return res;
};