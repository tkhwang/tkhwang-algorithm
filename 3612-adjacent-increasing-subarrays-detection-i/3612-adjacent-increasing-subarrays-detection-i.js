/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
  const N = nums.length;

  const dp = Array(N).fill(1);

  for (let i = N - 2; i >= 0; i -= 1) {
    if (nums[i] < nums[i + 1]) dp[i] = dp[i + 1] + 1;
  }

  for (let j = 0; j + 2 * k <= N; j += 1) {
    if (dp[j] >= k && dp[j + k] >= k) return true;
  }

  return false;
};