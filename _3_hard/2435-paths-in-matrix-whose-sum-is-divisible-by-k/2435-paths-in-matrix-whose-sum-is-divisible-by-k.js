/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const mod = 7 + 10 ** 9;
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const directions = [ [1,0], [0,1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r, c, sum) => `${r}:${c}:${sum}`;
    
    const memo = Array(ROWS).fill(null).map((_) => Array(COLS).fill(null).map((_) => Array(k).fill(-1)));
    
    const dp = (r, c, sum) => {
        sum += grid[r][c];
        sum = sum % k;
        
        if (r === ROWS -1 && c === COLS - 1) {
            return sum === 0 ? 1 : 0;
        }
        
        if (memo[r][c][sum] !== -1) return memo[r][c][sum];
    
        let counts = 0;
        for (const [dR, dC] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            
            counts += dp(newR, newC, sum)
        }
        memo[r][c][sum] = counts % mod;
        return memo[r][c][sum];
    }
    
    return dp(0, 0, 0);
};