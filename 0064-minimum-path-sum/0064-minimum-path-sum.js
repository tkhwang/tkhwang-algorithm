/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const directions = [ [1,0], [0,1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r,c) => `${r}:${c}`
    
    const dp = Array(ROWS).fill(null).map((_) => Array(COLS).fill(Infinity));
    dp[0][0] = grid[0][0];
    
    let min = Infinity;
    
    let res = null;
    const dfs = (r, c) => {
        if (r === ROWS -1 && c === COLS -1) {
            res = dp[r][c];
            return;
        }
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (dp[newR][newC] <= dp[r][c] + grid[newR][newC]) continue;
            
            dp[newR][newC] = dp[r][c] + grid[newR][newC]
            dfs(newR, newC);
        }
    }
    
    dfs(0, 0, 0)
    
    return res;
};