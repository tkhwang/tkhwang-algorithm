/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const N = nums.length;
    
    let right = N - 1;
    for (let left = 0; left < N; left += 1) {
        if (nums[left] === 0) {
            nums.splice(right, 0, nums.splice(left, 1));
            left -= 1;
            right -= 1;
        }
    }
};