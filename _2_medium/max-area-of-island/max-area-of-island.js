/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    let max = -Infinity;
    
    const dfs = (r, c) => {
        if (!isValid(r, c)) return 0;
        if (grid[r][c] !== 1) return 0;
        
        grid[r][c] = 0;

        return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const area = dfs(r, c);
            if (max < area) max = area;
        }
    }
    
    return max === -Infinity ? 0 : max;
};