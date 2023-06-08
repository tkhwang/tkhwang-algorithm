/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    let count = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] < 0) count += 1;
        }
    }
    return count;    
};