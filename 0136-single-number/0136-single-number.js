/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const N = nums.length;
    
    let res = nums[0];
    
    for (let i = 1; i < N; i += 1) {
        res = res ^ nums[i];
    }
    
    return res;
};