/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const N = nums.length;
    
    let max = nums[0]
    let maxIndex = 0;
    for (let i = 1; i < N; i += 1) {
        if (max < nums[i]) {
            max = nums[i];
            maxIndex = i;
        }
    }
    
    let isOK = true;
    for (const num of nums) {
        if (num === max) continue;
        if (!(num * 2 <= max)) {
            isOK = false;
            break;
        }
    }
    
    return isOK ? maxIndex : -1;
};