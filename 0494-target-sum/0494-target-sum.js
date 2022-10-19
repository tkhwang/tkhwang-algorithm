/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const N = nums.length;
    
    let count = 0;
    
    const dfs = (remain, i) => {
        if (i === N) {
            if (remain === 0) count += 1;
            return;
        }    

        dfs(remain + nums[i], i + 1);
        dfs(remain - nums[i], i + 1);
    }
    
    dfs(target, 0);
    
    return count;
};