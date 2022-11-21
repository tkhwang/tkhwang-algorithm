/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const [ ROWS, COLS ] = [ maze.length, maze[0].length ];
    
    const genKey = (r, c) => `${r}:${c}`;
    const queue =[ entrance ];

    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const seen = new Set();
    seen.add(genKey(entrance[0], entrance[1]));
    
    let steps = 0;
    
    while (queue.length) {
        const len = queue.length;

        for (let i = 0; i < len; i += 1) {
            const [ r, c ] = queue.shift();
            
            if (r === 0 || r === ROWS -1 || c === 0 || c === COLS - 1) {
                if (!(r === entrance[0] && c == entrance[1])) return steps;
            }
            
            for (const [ dR, dC ] of directions) {
                const newR = r + dR;
                const newC = c + dC;
                
                if (!isValid(newR, newC)) continue;
                if (maze[newR][newC] === "+") continue;
                if (seen.has(genKey(newR, newC))) continue;
                
                seen.add(genKey(newR, newC));
                queue.push([ newR, newC ])
            }
            
        }
        
        steps += 1;
    }
    return -1;
};