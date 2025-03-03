/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const [ ROWS, COLS ] = [ matrix.length, matrix[0].length ];
    
    let max = -Infinity;
    const cache = new Map();
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r, c) => `${r}:${c}`;
    
    const dfs = (r, c, parent) => {
        if (!isValid(r, c)) return 0;
        if (parent >= matrix[r][c]) return 0;
        if (cache.has(genKey(r, c))) return cache.get(genKey(r, c));
        
        let localMax = -Infinity;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            localMax = Math.max(localMax, 1 + dfs(newR, newC, matrix[r][c]));
        }
        
        cache.set(genKey(r, c), localMax);
        return localMax;
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0 ; c < COLS; c += 1) {
            max = Math.max(max, dfs(r, c, -Infinity));
        }
    }
    
    return max;
};