/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const [ ROWS, COLS ] = [ heights.length, heights[0].length ];
    
    const directions = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    let max = -Infinity;
    let min = Infinity;
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const cur = heights[r][c];
            
            max = Math.max(max, cur);
            min = Math.min(min, cur);
        }
    }
    
    const isOK = (max) => {
        const queue = [ [0, 0] ];
        const seen = Array(ROWS).fill(null).map((_) => Array(COLS).fill(false));
        seen[0][0] = true;
        
        while (queue.length) {
            const [ r, c ] = queue.shift();
            
            if (r === ROWS - 1 && c === COLS - 1) return true;
            
            for (const [ dR, dC ] of directions) {
                const newR = r + dR;
                const newC = c + dC;
                
                if (!isValid(newR, newC)) continue;
                if (seen[newR][newC]) continue;
                
                const diff = Math.abs(heights[newR][newC] - heights[r][c]);
                if (max < diff) continue;
                seen[newR][newC] = true;
                queue.push([ newR, newC ]);
            }            
        }
        
        return false;
    }
    
    let left = 0;
    let right = max - min;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);        

        if (isOK(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};