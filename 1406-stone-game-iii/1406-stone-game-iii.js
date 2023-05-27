/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const N = stoneValue.length;

    const dp = Array(N + 1).fill(0);
    
    for (let i = N - 1; i >= 0; i -= 1) {
        // 1
        dp[i] = stoneValue[i] - dp[i + 1];
        
        // 2
        if (i <= N - 2) {
            dp[i] = Math.max(
                dp[i],
                stoneValue[i] + stoneValue[i+1] - dp[i+2]
            )    
        }
        
        // 3
        if (i <= N - 3) {
            dp[i] = Math.max(
                dp[i],
                stoneValue[i] + stoneValue[i+1] + stoneValue[i+2] - dp[i+3]
            )
        }
    }
    
    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";
    return "Tie";    
};