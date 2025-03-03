/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    let count = 0;
    
    const dfs = (r,c, check) => {
        if (check) {
            console.log(r, c, grid[r][c], count);
            count += 1;
        }
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (grid[newR][newC] !== 1) continue;
            
            grid[newR][newC] = 0;
            dfs(newR, newC, check);
        }
    }
    
    // clear
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (!(r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1)) continue;
            if (grid[r][c] === 0) continue;
        
            grid[r][c] = 0
            dfs(r, c, false)
        }
    }
    
    // check
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 1) count += 1;
        }
    }
    
    return count;
};