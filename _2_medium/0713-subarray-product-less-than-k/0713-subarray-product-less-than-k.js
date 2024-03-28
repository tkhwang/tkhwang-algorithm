/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    const N = nums.length;

    if (k <= 1) return 0;

    let left = 0;
    let product = 1;
    let res = 0;
    for (let right = 0; right < N; right += 1) {
        product *= nums[right];

        while (product >= k) {
            product /= nums[left];
            left += 1;
        }
        res += right - left + 1;
    }    

    return res;
};