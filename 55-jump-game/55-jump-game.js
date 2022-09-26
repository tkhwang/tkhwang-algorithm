/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length;
    let goal = n - 1;
    
    for (let i = n - 2; i >= 0; i -= 1) {
        if (i + nums[i] >= goal) goal = i;
    }
    
    return goal === 0;
};