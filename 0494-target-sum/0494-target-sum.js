/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const N = nums.length;

    const backtrack = (remain, index) => {
        if (index >= N) {
            return remain === 0 ? 1 : 0;
        }

        return backtrack(remain - nums[index], index + 1) + backtrack(remain + nums[index], index + 1);
    }

    return backtrack(target, 0)    
};