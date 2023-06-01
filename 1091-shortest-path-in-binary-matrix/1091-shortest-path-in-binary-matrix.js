/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    if (grid[0][0] === 1) return -1;
    
    const directions = [ [1,0], [-1,0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1] ];
    
    const seen = Array(ROWS).fill(null).map((_) => Array(COLS).fill(Infinity));
    let min = Infinity;
    
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const queue = [ [ 0, 0, 1 ] ];
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i += 1) {
            const [ r, c, steps ] = queue.shift();
            
            if (r === ROWS - 1 && c == COLS - 1) return steps;
            
            for (const [ dR, dC ] of directions) {
                const newR = r + dR;
                const newC = c + dC;
                
                if (!isValid(newR, newC)) continue;
                if (grid[newR][newC] === 1) continue;
                if (seen[newR][newC] <= steps + 1) continue;

                seen[newR][newC] = steps + 1;
                queue.push([ newR, newC, steps + 1 ]);
            }
        }
    }

    return -1;
};