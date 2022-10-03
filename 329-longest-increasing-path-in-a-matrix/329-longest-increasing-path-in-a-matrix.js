/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const [ ROWS, COLS ] = [ matrix.length, matrix[0].length ];

    const directions = [ [1,0], [-1, 0], [0, 1], [0, -1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r, c) => `${r}:${c}`;
    
    const cache = Array(ROWS).fill(null).map((_) => Array(COLS).fill(-1));
    let max = -Infinity;

    const dfs = (r, c, parent) => {
        if (!isValid(r,c)) return 0;
        if (parent >= matrix[r][c]) return 0;
        
        if (cache[r][c] !== -1) return cache[r][c];
        
        let maxPath = 0;
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            const maxForNode = 1 + dfs(newR, newC, matrix[r][c]);
            maxPath = Math.max(maxPath, maxForNode);
        }
        cache[r][c] = maxPath;
        return cache[r][c];
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            max = Math.max(max, dfs(r, c, -Infinity))
        }
    }
    
    console.log(cache);
    
    return max;
};
