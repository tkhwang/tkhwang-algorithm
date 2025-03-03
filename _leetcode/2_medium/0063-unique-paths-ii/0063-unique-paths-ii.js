/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const [ ROWS, COLS ] = [ obstacleGrid.length, obstacleGrid[0].length ];
    
    const dp = Array(ROWS).fill(null).map((_) => Array(COLS).fill(0));
    
    for (let r = 0; r < ROWS; r += 1) {
        if (obstacleGrid[r][0] === 1) break;
        dp[r][0] = 1;
    }
    for (let c = 0; c < COLS; c += 1) {
        if (obstacleGrid[0][c] === 1) break;
        dp[0][c] = 1;
    }
    
    for (let r = 1; r < ROWS; r += 1) {
        for (let c = 1; c < COLS; c += 1) {
            if (obstacleGrid[r][c] === 1) continue;
            dp[r][c] = dp[r-1][c] + dp[r][c-1];
        }
    }
    return dp[ROWS-1][COLS-1];
};