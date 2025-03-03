/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const [ ROWS, COLS ] = [ image.length, image[0].length ];
    
    const directions = [ [1,0], [-1,0], [0, 1], [0, -1] ];
    const isValid = (r,c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r,c) => `${r}:${c}`;
    const visited = new Set();
    
    const dfs = (r, c, asis, tobe, visited) => {
        if (!isValid(r, c)) return;
        if (image[r][c] !== asis) return;

        image[r][c] = tobe;
        
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (visited.has(genKey(newR, newC))) continue;
            
            visited.add(genKey(newR, newC));
            dfs(newR, newC, asis, tobe, visited);
        }
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (r === sr && c === sc) {
                visited.add(genKey(r, c));
                dfs(r, c, image[r][c], color, visited)
            }
        }
    }
    
    return image;
};