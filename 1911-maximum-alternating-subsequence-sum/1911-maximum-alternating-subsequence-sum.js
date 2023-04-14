/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    const N = nums.length;
    let res = nums[0];
    
    for (let i = 1; i < N; i += 1) {
        res += Math.max(
            nums[i] - nums[i-1],
            0
        )
    }
    
    return res;
};