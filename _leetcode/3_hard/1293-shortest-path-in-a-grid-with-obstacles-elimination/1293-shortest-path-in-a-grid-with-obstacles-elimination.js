/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const directions = [ [1,0], [-1,0], [0, 1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const visited = new Set();
    const genKey = (r, c, k) => `${r}:${c}:${k}`;
    
    // [ r, c, remain, steps ]
    const queue =[ [0, 0, k, 0] ];
    visited.add(genKey(0, 0, k));
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            let [ r, c, remain, steps ] = queue.shift();

            if (remain < 0) continue;
            
            if (r === ROWS -1 && c === COLS - 1) return steps;
            
            for (const [ dR, dC ] of directions) {
                const newR = r + dR;
                const newC = c + dC;

                if (!isValid(newR, newC)) continue;
                
                
                if (grid[newR][newC] === 1) {
                    if (visited.has(genKey(newR, newC, remain - 1))) continue;
                    visited.add(genKey(newR, newC, remain - 1));
                    queue.push([ newR, newC, remain - 1, steps + 1]);
                } else {
                    if (visited.has(genKey(newR, newC, remain))) continue;
                    visited.add(genKey(newR, newC, remain));
                    queue.push([ newR, newC, remain, steps + 1]);
                }
            }
        }
    }
    
    return -1;
};