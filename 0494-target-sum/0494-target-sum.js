/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const N = nums.length;
    
    const cache = {};
    const genKey = (remain, i) => `${remain}:${i}`;
    
    const dfs = (remain, i) => {
        const key = genKey(remain, i);
        
        if (i === N) {
            if (remain === 0) return 1;
            return 0;
        }    
        
        if (cache[key] !== undefined) return cache[key];

        let local = 0;
        local += dfs(remain + nums[i], i + 1);
        local += dfs(remain - nums[i], i + 1);
        cache[key] = local;
        
        return cache[key];
    }
    
    return dfs(target, 0);
};