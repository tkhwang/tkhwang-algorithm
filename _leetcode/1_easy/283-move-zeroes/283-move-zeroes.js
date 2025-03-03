/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const N = nums.length;
    
    for (let i = N - 1; i >= 0; i -= 1) {
        const cur = nums[i];
        
        if (cur === 0) {
            nums.push(nums.splice(i, 1));
            i += 1;
        }
    }
};