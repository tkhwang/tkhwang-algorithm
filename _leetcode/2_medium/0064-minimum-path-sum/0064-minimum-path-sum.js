/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const dp = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
    dp[0][0] = grid[0][0]

    for (let r = 1 ; r < ROWS; r += 1) {
        dp[r][0] = dp[r-1][0] + grid[r][0]
    }
    for (let c = 1; c < COLS; c += 1) {
        dp[0][c] = dp[0][c-1] + grid[0][c];
    }

    for (let r = 1; r < ROWS; r += 1) {
        for (let c = 1; c < COLS; c += 1) {
            dp[r][c] = Math.min(
                dp[r-1][c] + grid[r][c],
                dp[r][c-1] + grid[r][c]
            )
        }
    }

    return dp[ROWS-1][COLS-1];
};