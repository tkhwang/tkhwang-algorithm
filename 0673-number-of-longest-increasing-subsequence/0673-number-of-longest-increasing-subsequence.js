/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const N = nums.length;

    const dp = Array(N).fill(1);
    const count = Array(N).fill(1);
    
    for (let i = 0; i < N; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i]= 0;
                }
                if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }                
            }
        }
    }
    
    const max = Math.max(...dp);
    
    let res = 0;
    for (let i = 0; i < N; i += 1) {
        if (dp[i] === max) res += count[i]
    }
    
    return res;
};