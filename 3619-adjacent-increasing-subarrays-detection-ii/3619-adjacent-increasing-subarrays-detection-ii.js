/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const N = nums.length;

    let left = 1;
    let right = 2 *N;

    const dp = Array(N + 1).fill(1);

    for (let i = N - 2; i >= 0; i -= 1) {
        if (nums[i] < nums[i+1]) dp[i] = dp[i+1] + 1;
    }

    const isOK = (width) => {
        for (let i = 0; i + 2 * width <= N; i += 1) {
            if (dp[i] >= width && dp[i + width] >= width) return true;
        }
        return false;
    }

    while (left <= right) {
        const mid = Math.floor( (left + right) / 2);

        if (isOK(mid)) {
            left = mid + 1;            
        } else {
            right = mid - 1;
        }
    }

    return left - 1;
};