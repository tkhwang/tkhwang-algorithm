/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const dfs = (row, col) => {
        const array = [];
        
        for (let r = row; r < row + 3; r += 1) {
            for (let c = col; c < col + 3; c += 1) {
                array.push(grid[r][c]);
            }
        }
        return Math.max(...array);
    }
    
    const result = [];
    for (let r = 0; r <= ROWS - 3; r += 1) {
        let local = [];
        for (let c = 0; c <= COLS - 3; c += 1) {
            local.push(dfs(r, c));
        }
        result.push(local);
    }
    return result;    
};