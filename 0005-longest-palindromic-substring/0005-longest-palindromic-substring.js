/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    if (N <= 1) return s;

    const dp = Array(N).fill(null).map(() => Array(N).fill(false));

    let start = 0;
    let maxLen = 1;

    for (let i = 0; i < N; i += 1) {
        dp[i][i] = true;
    }

    for (let len = 2; len <= N; len += 1) {
        for (let i = 0; i + len - 1 < N; i += 1) {
            const j = i + len - 1;

            if (s[i] !== s[j]) {
                dp[i][j] = false;
                continue;
            }

            if (len <= 3) {
                dp[i][j] = true;
            } else {
                dp[i][j] = dp[i+1][j-1];
            }

            if (dp[i][j] && len > maxLen) {
                maxLen = len;
                start = i;
            }
        }
    }

    return s.substring(start, start + maxLen);
};