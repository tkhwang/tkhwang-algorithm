/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const [ ROWS, COLS ] = [ image.length, image[0].length ];
    
    const directions = [ [ 1,0 ], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const dfs = (r, c, asis, tobe) => {
        image[r][c] = tobe;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (image[newR][newC] !== asis) continue;
            
            dfs(newR, newC, asis, tobe);
        }
    }
    
    if (image[sr][sc] === color) return image;
    
    dfs(sr, sc, image[sr][sc], color);
    
    return image;
};