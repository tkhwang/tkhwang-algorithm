/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    for (let i = 0; i < grid.length; i += 1) {
        grid[i].sort((a,b) => b - a);
    }

    let res = 0;
    
    for (let c = 0; c < COLS; c += 1) {
        let max = -Infinity;
        for (let r = 0; r < ROWS; r += 1) {
            max = Math.max(
                max,
                grid[r][c]
            )
        }
        res += max;
    }
    
    return res;
};