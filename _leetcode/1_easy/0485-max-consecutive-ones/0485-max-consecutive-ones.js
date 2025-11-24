/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const N = nums.length;

    let count = 0;
    let max = 0;
    let isProgress = false;

    for (const num of nums) {
        if (num === 1) {
            if (isProgress) {
                count += 1;
            } else {
                count = 1;
            }
            isProgress = true;
            if (max < count) max = count;
        } else {
            isProgress = false;
            count = 0;
        }
    }
    
    return max;
};