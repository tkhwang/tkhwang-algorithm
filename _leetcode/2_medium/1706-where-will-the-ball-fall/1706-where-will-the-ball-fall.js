/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const dfs = (r, c) => {
        if (r === ROWS) return c;
        if (c < 0 || c >= COLS) return -1;
            
        if (grid[r][c] === 1 && c + 1 < COLS && grid[r][c+1] === 1) return dfs(r + 1, c + 1);
        if (grid[r][c] === -1 && c - 1 >= 0 && grid[r][c-1] === -1) return dfs(r + 1, c - 1);
        
        return -1;
    }

    const res = Array(COLS).fill(0);
    
    for (let c = 0; c < COLS; c += 1) {
        res[c] = dfs(0, c);
    }
    return res;
};