/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    let count = 0;
    
    const dfs = (r, c) => {
        if (!isValid(r, c)) return;
        if (grid[r][c] !== "1") return;
        
        grid[r][c] = "0";

        for (const [dR, dC] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            dfs(newR, newC);
        }
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === "1") {
                count += 1;
                dfs(r, c)
            }
        }
    }
    
    return count;
};