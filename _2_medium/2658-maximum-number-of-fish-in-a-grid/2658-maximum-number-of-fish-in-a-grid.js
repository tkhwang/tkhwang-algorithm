/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    let count = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] !== 0) count += 1;
        }
    }
    
    if (count === 0) return 0;

    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r,c) => `${r}:${c}`    
    const obj = {};
    
    let max = 0;
    
    const dfs = (r, c, count, seen, key) => {
        obj[key] += grid[r][c];
        if (max < count) max = count;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            if (!isValid(newR, newC)) continue;
            if (grid[newR][newC] === 0) continue;
            if (seen[newR][newC]) continue;
            
            seen[newR][newC] = true;
            dfs(newR, newC, count, seen, key);
        }
    }

    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 0) continue;
            
            const seen = Array(ROWS).fill(null).map((_) => Array(COLS).fill(false))
            seen[r][c] = true;
            const key = genKey(r, c)
            obj[key] = 0;
            dfs(r, c, 0, seen, key)
        }
    }
    
    return Math.max(...Object.values(obj))
};