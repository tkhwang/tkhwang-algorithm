/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const [ ROWS, COLS ] = [ image.length, image[0].length ];
    
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const dfs = (r, c, initColor) => {
        if (!isValid(r, c)) return;
        if (image[r][c] !== initColor) return;
        if (image[r][c] === color) return;

        image[r][c] = color;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            dfs(newR, newC, initColor);
        }
    }
    
    dfs(sr, sc, image[sr][sc])
    
    return image;
};