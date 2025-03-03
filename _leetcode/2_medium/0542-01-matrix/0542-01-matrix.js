/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const result = Array(mat.length).fill(null).map((_) => Array(mat[0].length));

    const queue = [];

    for (let r = 0; r < mat.length; r += 1) {
        for (let c = 0; c < mat[0].length; c += 1) {
            if (mat[r][c] === 0) {
                result[r][c] = 0;
                queue.push([r,c]);
            } else {
                result[r][c] = Infinity;
            }
        }
    }

    while (queue.length) {
        const [ r, c ] = queue.shift();
        
        for (const direction of directions) {
            const [ deltaR, deltaC ] = direction;
            
            const newR = r + deltaR;
            const newC = c + deltaC;
            
            if (newR >=0 && newC >= 0 && newR < mat.length && newC < mat[0].length ) {
                if (result[newR][newC] > result[r][c] + 1) {
                    result[newR][newC] = result[r][c] + 1;
                    queue.push([newR, newC]);
                }
            }
            
        }
    }
    
    return result;
};