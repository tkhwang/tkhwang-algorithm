/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const [ ROWS, COLS ] = [ mat.length, mat[0].length ];
    
    let sum = 0;
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (r === c || r + c === ROWS - 1) sum += mat[r][c];
        }
    }
    
    // if (ROWS % 2 === 1) {
    //     const mid = Math.floor(ROWS/2);
    //     sum -= mat[mid][mid];
    // }
    
    return sum;
};