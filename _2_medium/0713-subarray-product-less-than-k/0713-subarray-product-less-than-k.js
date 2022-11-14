/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    
    const N = nums.length;

    let product = 1;
    let left = 0;
    let count = 0;
    for (let right = 0; right < N; right += 1) {
        product *= nums[right];
        while (product >= k) {
            const leftNum = nums[left];
            product /= leftNum;
            left += 1;
        }
        count += (right - left + 1);
    }
    return count;
};