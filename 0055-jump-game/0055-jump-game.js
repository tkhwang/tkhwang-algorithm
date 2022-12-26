/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const N = nums.length;

    let max = 0;
    
    for (const [ i, num ] of nums.entries()) {
        if (i > max) return false;
        max = Math.max(max, i + num);
    }
    
    return true;
};