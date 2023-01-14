/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const N = nums.length;
    
    let max = -Infinity;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        sum += nums[right];
        while (right - left + 1 > k) {
            sum -= nums[left];
            left += 1;
        }
        if (right >= k - 1) {
            const localSum = sum / k;
            if (max < localSum) max = localSum;
        }
    }
    return max;
};