/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const res = Array(ROWS).fill(null).map((_) => Array(COLS).fill(0));
    
    const topLeft = (r, c) => {
        const set = new Set();
        while (r > 0 && c > 0) {
            r -= 1;
            c -= 1;
            set.add(grid[r][c]);
        }
        return set.size;
    }
    
    const bottomRight = (r, c) => {
        const set = new Set();
        while (r < ROWS - 1 && c < COLS - 1) {
            r += 1;
            c += 1;
            set.add(grid[r][c]);
        }
        return set.size;
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            res[r][c] = Math.abs(topLeft(r, c) - bottomRight(r, c));
        }
    }
    
    return res;
};