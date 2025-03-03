/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const [ ROWS, COLS ] = [ matrix.length, matrix[0].length ];
    
    // dp[i][j] => matrix[i][j]
    const dp = Array(ROWS).fill(null).map((_) => Array(COLS).fill(Infinity));
    
    for (let c = 0; c < COLS; c += 1) {
        dp[0][c] = matrix[0][c];
    }
    
    for (let r = 1; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            dp[r][c] = Math.min(
                dp[r-1][c-1] || Infinity,
                dp[r-1][c] || Infinity,
                dp[r-1][c+1] || Infinity
            ) + matrix[r][c]
        }
    }
    
    const min = Math.min(...dp[ROWS-1]);
    return min === Infinity ? -1 : min;
};