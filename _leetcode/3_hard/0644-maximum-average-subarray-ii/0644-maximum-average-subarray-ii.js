/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const N = nums.length;
    let maxAll = -Infinity;
    
    for (let length = k; length <= Math.max(k, N); length += 1) {
        let sum = 0;
        for (let i = 0; i < length; i += 1) {
            sum += nums[i];
        }
        
        let max = sum;
        
        for (let i = length; i < N; i += 1) {
            sum += nums[i] - nums[i-length];
            if (max < sum) max = sum;    
        }
        const local = max / length;
        if (maxAll < local) maxAll = local;
    }
    
    return maxAll;
};