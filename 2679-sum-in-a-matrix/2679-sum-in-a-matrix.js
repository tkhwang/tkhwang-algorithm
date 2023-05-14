/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    const [ ROWS, COLS ] = [ nums.length, nums[0].length ];
    
    const updated = nums.map((row) => row.sort((a,b) => a - b))
    
    let sum = 0;
    
    for (let c = COLS - 1; c >= 0; c -= 1) {
        let max = -Infinity;
        for (let r = 0; r < ROWS; r += 1) {
            const cur = updated[r][c];
            if (max < cur) max = cur;
        }
        sum += max;
    }
    
    return sum;
};