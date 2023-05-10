/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const [ ROWS, COLS ] = [ matrix.length, matrix[0].length ];
    
    let [ top, down ] = [ 0, ROWS - 1 ];
    let [ left, right ] = [ 0, COLS - 1 ];
    
    const res = [];
    
    while (res.length < ROWS * COLS) {
        for (let c = left; c <= right; c += 1) {
            res.push(matrix[top][c]);
        }
        for (let r = top + 1; r <= down; r += 1) {
            res.push(matrix[r][right]);
        }
        if (top !== down) {
            for (let c = right - 1; c >= left; c -= 1) {
                res.push(matrix[down][c]);
            }
        }
        if (left !== right) {
            for (let r = down - 1; top + 1 <= r; r -= 1) {
                res.push(matrix[r][left]);
            }
        }
        
        top += 1;
        down -= 1;
        left += 1;
        right -= 1;
    }
    
    return res;
};