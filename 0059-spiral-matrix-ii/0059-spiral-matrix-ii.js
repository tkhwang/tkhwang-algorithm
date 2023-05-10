/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(N) {
    const arr = Array(N).fill(null).map((_) => Array(N));
    
    let left = 0;
    let right = N - 1;
    let top = 0;
    let down = N - 1;
    
    let i = 1;
    
    while (i <= N * N) {
        for (let c = left; c <= right; c += 1) {
            arr[top][c] = i;
            i += 1;
        }
        top += 1;
        for (let r = top; r <= down; r += 1) {
            arr[r][right] = i;
            i += 1;
        }
        right -= 1;
        for (let c = right; c >= left; c -= 1) {
            arr[down][c] = i;
            i += 1;
        }
        down -= 1;
        for (let r = down; r >= top; r -= 1) {
            arr[r][left] = i;
            i += 1;
        }
        left += 1;
    }
    
    return arr;
};