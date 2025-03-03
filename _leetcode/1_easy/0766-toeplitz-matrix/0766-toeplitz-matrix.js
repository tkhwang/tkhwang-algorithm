/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const [ ROWS, COLS ] = [ matrix.length, matrix[0].length ];
    const obj = {};

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const diff = r - c;
            if (obj[diff] === undefined) obj[diff] = matrix[r][c];
            else {
                if (obj[diff] !== matrix[r][c]) return false;
            }
        }
    }
    return true;
};