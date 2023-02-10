/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const visited = Array(ROWS).fill(null).map((_) => Array(COLS).fill(false));
    
    let max = 0;
    let steps = 1;
    
    const bfs = (starts) => {
        const queue = [ ...starts ];
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ r, c ] = queue.shift();
                
                grid[r][c] = steps;
                max = Math.max(max, steps);
                
                for (const [ dR, dC ] of directions) {
                    const newR = r + dR;
                    const newC = c + dC;
                    
                    if (!isValid(newR, newC)) continue;
                    if (grid[newR][newC] !== 0) continue;
                    if (visited[newR][newC]) continue;

                    visited[newR][newC] = true;
                    queue.push([ newR, newC ]);
                }

            }
            
            steps += 1;
        }
    }
    
    const starts = [];
    let ones = 0;
    let zeros = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 1) {
                starts.push([ r, c ]);
                ones += 1;
            } else {
                zeros += 1;
            }
        }
    }
    
    if (ones === 0 || zeros === 0) return -1;
    
    bfs(starts);
    
    return max - 1;
};