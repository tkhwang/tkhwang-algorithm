/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    let count = 0;

    const genCol = (r, c) => {
        const arr = [];
        for (let r = 0; r < ROWS; r += 1) {
            arr.push(grid[r][c])
        }
        return arr;
    }
    
    const isSame = (row, col) => {
        for (let i = 0; i < row.length; i += 1) {
            if (row[i] !== col[i]) return false;
        }
        return true;
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (isSame(grid[r], genCol(r, c))) count += 1;
        }
    }
    
    return count;
};