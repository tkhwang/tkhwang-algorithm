/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === -1);
    const directions = [ [1,0],[-1,0],[0,1],[0,-1] ];
    const genKey = (r, c) => `${r}:${c}`;
    
    const res = [];
    const set = new Set();
    const genPathKey = (array) => array.map((v) => v.join(",")).join(",");
    
    let count = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 0) count += 1;
        }
    }
    
    const dfs = (path, r, c, seen, count) => {
        if (grid[r][c] === 0) {
            count -= 1
        }
        
        if (grid[r][c] === 2 && count === 0) {
            if (!set.has(genPathKey(path))) {
                set.add(genPathKey(path));
                res.push([...path]);
            }
            return;
        }    
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (seen.has(genKey(newR, newC))) continue;
            
            seen.add(genKey(newR, newC));
            path.push([ newR, newC ]);
            
            dfs(path, newR, newC, seen, count);
            
            path.pop();
            seen.delete(genKey(newR, newC));
        }
        
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 1) {
                const seen = new Set();
                seen.add(genKey(r, c));
                dfs([], r, c, seen, count);                
            }
        }
    }
    
    return res.length;
};