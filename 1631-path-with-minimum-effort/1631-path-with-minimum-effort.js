/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const [ ROWS, COLS ] = [ heights.length, heights[0].length ];
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r,c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r, c) => `${r}:${c}`;
    
    let min = Infinity;
    
    const dfs = (r, c, limit, seen) => {
        if (r === ROWS - 1 && c === COLS - 1) return true;
        
        let res = false;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR; 
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (seen.has(genKey(newR, newC))) continue;
            if (Math.abs(heights[newR][newC] - heights[r][c]) > limit) continue;
            
            seen.add(genKey(newR, newC));
            
            res = res || dfs(
                newR, 
                newC, 
                limit,
                seen);
            
            seen.delete(genKey(newR, newC));
        }
        return res;
    }
    
    const bfs = (limit) => {
        const queue = [ [ 0, 0 ] ];
        const seen = new Set();
        seen.add(genKey(0, 0));
        
        // const visited = Array(ROWS).fill(null).map((_) => Array(COLS).fill(false));
        // visited[0][0] = true;
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ r, c ] = queue.shift();
                
                if (r === ROWS - 1 && c === COLS - 1) return true;
        
                for (const [ dR, dC ] of directions) {
                    const newR = r + dR;
                    const newC = c + dC;
                    
                    if (!isValid(newR, newC)) continue;
                    if (seen.has(genKey(newR, newC))) continue;
                    // if (visited[newR][newC]) continue;
                    if (Math.abs(heights[newR][newC] - heights[r][c]) > limit) continue;
                    
                    seen.add(genKey(newR, newC));
                    // visited[newR][newC] = true;
                    queue.push([ newR, newC ]);
                }
            }
        }
        return false;
    }
    
    const isOK = (limit) => {
        const seen = new Set();
        seen.add(genKey(0, 0));
        
        // return dfs(0, 0, limit, seen);
        return bfs(limit);
    }

    let left = 0;
    let right = 10 ** 6;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};