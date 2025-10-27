/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(ROWS, COLS) {
    const dp = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));

    for (let r = 0; r < ROWS; r += 1) {
        dp[r][0] = 1;
    }
    for (let c = 0; c < COLS; c += 1 ) {
        dp[0][c] = 1;
    }

    for (let r = 1; r < ROWS; r += 1) {
        for (let c = 1; c < COLS; c += 1) {
            dp[r][c] = dp[r-1][c] + dp[r][c-1];
        }
    }

    return dp[ROWS - 1][COLS - 1];
};