/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const N = nums.length;
    let j = 1;
    
    for (let i = 1; i < N; i += 1) {
        if (nums[i-1] !== nums[i]) {
            nums[j] = nums[i];
            j += 1;
        }
    }
    
    return j;
};