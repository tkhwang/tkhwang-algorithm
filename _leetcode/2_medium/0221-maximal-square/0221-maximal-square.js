/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const [ ROWS, COLS ] = [ matrix.length, matrix[0].length ];
    
    const dp = Array(ROWS + 1).fill(null).map((_) => Array(COLS+ 1).fill(0));
    let max = 0
    
    for (let r = 1; r <= ROWS; r += 1) {
        for (let c = 1; c <= COLS; c += 1) {
            if (matrix[r-1][c-1] === "1") {
                dp[r][c] = Math.min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1;
                max = Math.max(max, dp[r][c]);
            }
        }
    }
    
    return max * max
};