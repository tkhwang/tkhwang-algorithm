/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const [ ROWS, COLS ] = [ matrix.length, matrix[0].length ]
    const res = [];
    
    for (let c = 0; c < COLS; c += 1) {
        const col = [];
        for (let r = 0; r < ROWS; r += 1) {
            col.push(matrix[r][c]);
        }
        res.push([...col]);
    }
    
    return res;
    
};