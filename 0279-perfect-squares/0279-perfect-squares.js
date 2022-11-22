/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(N) {
    const isSquare = (num) => num > 0 && Math.sqrt(num) % 1 === 0;

    // dp[i] 
    const dp = Array(N+1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= N; i += 1) {
        for (let j = 1; j * j <= i; j += 1) {
            dp[i] = Math.min(
                dp[i],
                dp[i - j * j] + 1
            )
        }
    }
    
    return dp[N];
};