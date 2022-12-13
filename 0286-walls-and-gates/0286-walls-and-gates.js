/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const [ ROWS, COLS ] = [ rooms.length, rooms[0].length ];
    const EMPTY = 2147483647;
    
    const genKey = (r, c) => `${r}:${c}`;
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const bfs = (queue, steps) => {
        const seen = new Set();
        
        for (const [ r, c ] of queue) {
            seen.add(genKey(r, c));
        }

        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ r, c ] = queue.shift();
                
                rooms[r][c] = Math.min(
                    rooms[r][c],
                    steps
                )
                
                for (const [ dR, dC ] of directions) {
                    const newR = r + dR;
                    const newC = c + dC;
                    
                    if (!isValid(newR, newC)) continue;
                    if (rooms[newR][newC] !== 2147483647) continue;
                    if (seen.has(genKey(newR, newC))) continue;
                    
                    seen.add(genKey(newR, newC));
                    queue.push([ newR, newC ]);
                }
            }
            
            steps += 1;
        }
    }
    
    const queue = [];
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (rooms[r][c] === 0) queue.push([ r, c ]);
        }
    }
    
    bfs(queue, 0)
    
    return rooms;
};