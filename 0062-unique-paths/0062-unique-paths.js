/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const [ ROWS, COLS ] = [ m, n ];
    
    const dp = Array(ROWS).fill(null).map((_) => Array(COLS).fill(0));
    dp[0][0] = 1;

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (c > 0) dp[r][c] += dp[r][c-1];
            if (r > 0) dp[r][c] += dp[r-1][c];
        }
    }
    
    return dp[ROWS-1][COLS-1];
};