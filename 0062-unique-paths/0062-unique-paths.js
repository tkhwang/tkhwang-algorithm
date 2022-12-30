/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const [ ROWS, COLS ] = [ m, n ];
    
    const dp = Array(ROWS).fill(null).map((_) => Array(COLS).fill(1));

    for (let r = 1; r < ROWS; r += 1) {
        for (let c = 1; c < COLS; c += 1) {
            dp[r][c] = dp[r-1][c] + dp[r][c-1]
        }
    }
    
    return dp[ROWS-1][COLS-1];
};