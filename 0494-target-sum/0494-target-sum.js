/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const N = nums.length;
    
    const dfs = (remain, index) => {
        if (index >= N) {
            return remain === 0 ? 1 :0;
        }

        let res = 0;
        res += dfs(remain + nums[index], index + 1);
        res += dfs(remain - nums[index], index + 1);
        return res;
    }
    
    return dfs(target, 0);    
};