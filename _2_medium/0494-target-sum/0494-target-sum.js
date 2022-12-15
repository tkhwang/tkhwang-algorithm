/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const N = nums.length;
    let count = 0;
    
    const dfs = (remain, index) => {
        if (index >= N) {
            if (remain === 0) count += 1;
            return;
        }

        dfs(remain - nums[index], index + 1);
        dfs(remain + nums[index], index + 1);
    }
    
    dfs(target, 0)
    
    return count;
};