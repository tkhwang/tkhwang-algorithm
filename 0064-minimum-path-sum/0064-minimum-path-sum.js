/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const directions = [ [1,0], [0,1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);

    const costs = Array(ROWS).fill(null).map((_) => Array(COLS).fill(Infinity));
    
    let min = Infinity;
    
    const dfs = (r, c, cost) => {
        cost += grid[r][c];
        
        if (r === ROWS - 1 && c === COLS - 1) {
            if (min > cost) min = cost;
            return;
        }
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (!(costs[newR][newC] > cost)) continue;
            
            costs[newR][newC] = cost;
            dfs(newR, newC, cost)
        }
    }
    
    dfs(0, 0, 0);
    
    return min;
};