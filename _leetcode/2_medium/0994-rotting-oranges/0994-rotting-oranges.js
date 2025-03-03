/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const queue = [];
    let fresh = 0;
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 1) fresh += 1;
            if (grid[r][c] === 2) queue.push([ r, c ]);
        }
    }

    if (queue.length === 0) return fresh === 0 ? 0 : -1;

    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    console.log(queue);
    
    const bfs = () => {
        let steps = 0;
        
        while (fresh > 0 && queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ r, c ] = queue.shift();
                
                for (const [ dR, dC ] of directions) {
                    const newR = r + dR;
                    const newC = c + dC;
                    
                    if (!isValid(newR, newC)) continue;
                    if (grid[newR][newC] !== 1) continue;
                    
                    fresh -= 1;
                    grid[newR][newC] = 2;
                    
                    queue.push([ newR, newC ]);
                }
            }
            
            steps += 1;
        }
        
        return fresh === 0 ? steps : -1;
    }

    return bfs()
};