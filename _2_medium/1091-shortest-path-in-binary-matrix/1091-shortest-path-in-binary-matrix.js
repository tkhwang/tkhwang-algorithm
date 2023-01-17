/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    const res = [];
    
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const directions = [ [1,0], [-1,0], [0,1], [0,-1], [-1,-1], [1,1], [1,-1], [-1,1]];
    const genKey = (r, c) => `${r}:${c}`;
    
    const bfs = (r, c) => {
        const queue = [];
        queue.push([ r, c ]);
        let steps = 1;
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ r, c ] = queue.shift();
                if (r === ROWS -1 && c === COLS - 1) return steps;
                
                for (const [ dR, dC ] of directions) {
                    const newR = r + dR;
                    const newC = c + dC;
                    
                    if (!isValid(newR, newC)) continue;
                    if (grid[newR][newC] === 1) continue;

                    grid[newR][newC] = 1;
                    queue.push([ newR, newC ]);
                }
            }
            
            steps += 1;
        }
        return -1;
    }
    
    if (grid[0][0] === 1) return -1;
    
    return bfs(0, 0);
};