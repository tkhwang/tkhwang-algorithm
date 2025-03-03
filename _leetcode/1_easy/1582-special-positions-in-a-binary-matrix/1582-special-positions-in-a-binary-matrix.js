/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const [ ROWS, COLS ] = [ mat.length, mat[0].length ];
    
    const rows = Array(ROWS).fill(0);
    const cols = Array(COLS).fill(0);
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            rows[r] += mat[r][c];
            cols[c] += mat[r][c];
        }
    }

    let count = 0;
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (mat[r][c] === 1 && rows[r] === 1 && cols[c] === 1) count += 1;
        }
    }
    
    return count;
};