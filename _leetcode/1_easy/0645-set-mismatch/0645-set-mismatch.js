/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const N = nums.length;

    const dp = Array(N + 1).fill(0);

    const result = Array(2).fill(0);

    for (const num of nums) {
        dp[num] += 1;
    }
    for (let i = 1; i <= N; i += 1) {
        if (dp[i] === 2) result[0] = i;
        if (dp[i] === 0) result[1] = i;
    }

    return result;
};