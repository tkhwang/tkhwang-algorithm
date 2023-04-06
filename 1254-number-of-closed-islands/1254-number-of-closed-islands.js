/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const dfs = (r, c) => {
        if (grid[r][c] !== 0) return;
        grid[r][c] = 1;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            if (!isValid(newR, newC)) continue;
            if (grid[newR][newC] !== 0) continue;
            
            dfs(newR, newC);
        }
    }

    // clear
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] !== 0) continue;
            if (!(r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1)) continue;
            dfs(r, c);
        }
    }
    
    let count = 0;
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] !== 0) continue;
            
            count += 1;
            dfs(r, c);
        }
    }
    
    return count;
};