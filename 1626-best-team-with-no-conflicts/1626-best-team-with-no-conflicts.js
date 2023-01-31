/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const N = scores.length;
    
    const merged = ages.map((v,i) => [ v, scores[i] ]).sort((a,b) => a[0] - b[0] || a[1] - b[1]);

    console.log(merged);
    
    const dp = Array(N).fill(0);
    
    for (let i = 0; i < N; i += 1) {
        dp[i] = merged[i][1];
        for (let j = 0; j < i; j += 1) {
            if (merged[j][1] <= merged[i][1]) {
                dp[i] = Math.max(
                    dp[i],
                    dp[j] + merged[i][1]
                )
            }
        }
    }
    
    return Math.max(...dp);
};