/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];
    
    if (grid[0][1] > 1 && grid[1][0] > 1) return -1;
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const seen = new Set();
    const genKey = (r, c) => `${r}:${c}`;
    
    // [ cost, r, c ]
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });
    minHeap.enqueue([ 0, 0, 0 ]);

    while (minHeap.size()) {
        let [ time, r, c ] = minHeap.dequeue();

        if (r === ROWS - 1 && c === COLS - 1) return time;
        
        if (seen.has(genKey(r, c))) continue;
        seen.add(genKey(r, c));
        time += 1;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            // if (seen.has(genKey(newR, newC))) continue;

            if (grid[newR][newC] <= time) {
                minHeap.enqueue([ time, newR, newC ]);
            } else {
                const isOdd = (grid[newR][newC] - time) % 2 === 1;
                const timeReq = grid[newR][newC] + isOdd;
                minHeap.enqueue([ timeReq, newR, newC ]);
            }
        }    
    }
    return -1;
};