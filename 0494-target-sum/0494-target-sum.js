/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const N = nums.length;
    let count = 0;
    
    const backtrack = (i, sum) => {
        if (i >= N) {
            if (sum === target) count += 1;
            return;
        }
        
        backtrack(i + 1, sum + nums[i]);
        backtrack(i + 1, sum - nums[i]);
    }
    
    backtrack(0, 0);
    
    return count;
};