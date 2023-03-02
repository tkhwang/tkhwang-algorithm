/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const MOD = 7 + 10 ** 9;
    const dp = Array(ROWS).fill(null).map((_) => Array(COLS).fill(0));
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const dfs = (r, c) => {
        if (dp[r][c]) return dp[r][c]

        let res = 1;
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (!(grid[r][c] < grid[newR][newC])) continue;
            
            res = (res  + dfs(newR, newC)) % MOD;
        }
        return dp[r][c] = res % MOD;
    }

    let count = 0;
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            count += dfs(r, c) % MOD;
        }
    }
    
    return count % MOD;
};