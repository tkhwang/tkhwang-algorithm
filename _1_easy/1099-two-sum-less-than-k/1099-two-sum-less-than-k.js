/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);

    let left = 0;
    let right = N - 1;
    let max = -Infinity;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum < k) {
            if (max < sum) max = sum;
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max === -Infinity ? -1 : max;
};