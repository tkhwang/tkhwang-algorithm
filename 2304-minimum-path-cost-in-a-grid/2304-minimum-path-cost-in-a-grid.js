/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const dp = Array(ROWS).fill(null).map((_) => Array(COLS).fill(Infinity));
    
    for (let c = 0; c < COLS; c += 1) {
        dp[0][c] = grid[0][c];
    }
    
    for (let r = 1; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            for (let k = 0; k < COLS; k += 1) {
                dp[r][k] = Math.min(
                    dp[r][k],
                    dp[r-1][c] + grid[r][k] + moveCost[grid[r-1][c]][k]
                )
            }
        }
    }
    
    return Math.min(...dp[ROWS - 1]);
};