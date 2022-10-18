/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const N1 = text1.length;
    const N2 = text2.length;
    
    const dp = Array(N1 + 1).fill(null).map((_) => Array(N2 + 1).fill(0));
    
    for (let i = 1; i <= N1; i += 1) {
        for (let j = 1; j <= N2; j += 1) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[N1][N2];
};

//     const cache = {};
//     const genKey = (i, j) => `${i}:${j}`;
    
//     // dp(i, j) : text1[i], text2[j] 지점의 LCS 갯수
    
//     const dp = (i, j) => {
//         const key = genKey(i, j)
        
//         if (i === 0 || j === 0) return 0;
//         if (cache[key] !== undefined) return cache[key];
        
//         if (text1[i-1] === text2[j-1]) {
//             cache[key] =  1 + dp(i-1, j-1);
//         } else {
//             cache[key] = Math.max(dp(i-1, j), dp(i, j-1));
//         }
//         return cache[key];
//     }
    
//     return dp(N1, N2);