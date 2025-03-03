/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const N = img1.length;
    
   let max = -Infinity;
    
    for (let dx = -N; dx <= N; dx += 1) {
        for (let dy = -N; dy <= N; dy += 1) {
            let count = 0;
            for (let x = 0; x < N; x += 1) {
                let nx = x + dx;
                if (!(0 <= nx && nx < N)) continue;
                for (let y = 0; y < N; y += 1) {
                    let ny = y + dy;
                    if (!(0 <= ny && ny < N)) continue;
                    
                    if (img1[nx][ny] === 1 && img2[x][y] === 1) count += 1;
                }
            }
            if (max < count) max = count;
        }
    }
    return max;
};