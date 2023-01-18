/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
    const N = nums.length;
    
    const dp = Array(N).fill(null).map((_) => Array(2).fill(0));
    const ORG = 0;
    const SQU = 1;
    
    dp[0][ORG] = nums[0];
    dp[0][SQU] = nums[0] * nums[0];
    
    let max = dp[0][SQU];
    
    for (let i = 1; i < N; i += 1) {
        dp[i][ORG] = Math.max(dp[i-1][ORG] + nums[i], nums[i]);
        dp[i][SQU] = Math.max(
             nums[i] * nums[i],
            dp[i-1][ORG] + nums[i]*nums[i],
            dp[i-1][SQU] + nums[i]
        );
        
        max = Math.max(max, dp[i][ORG], dp[i][SQU]);
    }
    
    return max;
};