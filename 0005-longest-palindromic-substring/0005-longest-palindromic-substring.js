/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;

    const dp = Array(N).fill(null).map(() => Array(N).fill(false));

    for (let i = 0; i < N; i += 1) {
        dp[i][i] = true;
    }

    let start = 0;
    let max = 1;

    for (let len = 2; len <= N; len += 1) {
        for (let i = 0; i < N - len + 1; i += 1) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                if (len === 2 || dp[i+1][j-1]) {
                    dp[i][j] = true;
                    if (max < len) {
                        start = i;
                        max = len;
                    }
                }
            }
        }
    }
    return s.substring(start, start + max);
};