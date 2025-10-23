/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    if (N <= 1) return s;

    let start = 0;
    let maxLength = 1;

    const dp = Array(N).fill(0).map((_) => Array(N).fill(false));

    for (let i = 0; i < N; i += 1) {
        dp[i][i] = true;
    }

    for (let length = 2; length <= N; length += 1) {
        for (let i = 0; i <= N - length; i += 1) {
            // j - i + 1 = length
            const j = i + length - 1;
            if (s[i] === s[j]) {
                if (length === 2) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }

                if (dp[i][j] && length > maxLength) {
                    start = i;
                    maxLength = length;
                }
            } 
        }
    }

    return s.substring(start, start + maxLength);
};