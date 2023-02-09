/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const N = nums.length;
    
    let increase = true;
    for (let i = 1; i < N; i += 1) {
        if (increase) {
            if (nums[i-1] > nums[i]) [ nums[i-1], nums[i] ] = [ nums[i], nums[i-1] ];
        } else {
            if (nums[i-1] < nums[i]) [ nums[i-1], nums[i] ] = [ nums[i], nums[i-1] ];
        }
        
        increase = !increase;
    }
    
    return nums;
};