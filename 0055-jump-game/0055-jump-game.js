/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const N = nums.length;
    let max = 0;
    
    for (let i = 0; i < N; i += 1) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }
    return true;
};