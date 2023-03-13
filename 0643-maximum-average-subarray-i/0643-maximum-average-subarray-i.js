/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const N = nums.length;

    let sum = 0;
    for (let i = 0; i < k; i += 1) {
        sum += nums[i];
    }

    let max = sum;
    
    for (let i = k; i < N; i += 1) {
        sum += nums[i] - nums[i-k];
        if (max < sum) max = sum;
    }
    
    return max / k;
};