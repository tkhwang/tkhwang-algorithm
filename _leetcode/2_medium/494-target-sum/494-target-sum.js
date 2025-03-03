/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const N = nums.length;
    let count = 0;
    
    const dfs = (index, sum) => {
        if (index >= N) {
            if (sum === target) count += 1;
            return;
        }
        
        dfs(index + 1, sum + nums[index]);
        dfs(index + 1, sum - nums[index]);
    }
    
    dfs(0, 0);
    
    return count;
};