/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = {};
    const N = nums.length;

    let ans = 0;
    let left = 0;
    let right = 0;
    
    while (right < N) {
        freq[nums[right]] = (freq[nums[right]] || 0) + 1;
        while (freq[nums[right]] > k) {
            freq[nums[left]] -= 1;
            left += 1;
        }
        ans = Math.max(ans, right - left + 1);
        right += 1;
    }
    return ans;
};