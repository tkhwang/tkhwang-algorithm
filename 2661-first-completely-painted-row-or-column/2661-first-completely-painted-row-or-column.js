/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const [ ROWS, COLS ] = [ mat.length, mat[0].length ];
    
    const lookup = {};
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            lookup[mat[r][c]] = [ r, c ];
        }
    }
    
    const rows = Array(ROWS).fill(0);
    const cols = Array(COLS).fill(0);
    
    for (const [ i, num ] of arr.entries()) {
        const [ r, c ] = lookup[num];
        
        rows[r] += 1;
        cols[c] += 1;
        
        if (rows[r] === COLS || cols[c] === ROWS) return i;
    }
    
    return -1;
};