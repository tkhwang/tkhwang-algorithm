/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    let max = -Infinity;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        sum += nums[right];
        while(nums[right] * (right - left + 1) - sum > k) {
            sum -= nums[left]
            left += 1;
        }
        if (max < right - left + 1) max = right - left + 1;
    }
    return max;      
};