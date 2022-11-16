/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    const N = nums.length;
    const prefixSumMap = { 0: [-1] };
    
    let max = -Infinity;
    let sum = 0;
    
    for (let i = 0; i < N; i += 1) {
        sum += nums[i];
        if (prefixSumMap[sum - k] !== undefined) {
            const min = Math.min(...prefixSumMap[sum - k]);
            if (max < i - min) max = i - min;
        }
        if (prefixSumMap[sum] === undefined) prefixSumMap[sum] = [];
        prefixSumMap[sum].push(i);
    }
    
    return max === -Infinity ? 0 : max;
};