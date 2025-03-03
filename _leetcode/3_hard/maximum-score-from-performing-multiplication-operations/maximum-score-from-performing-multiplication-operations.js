/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    const N = nums.length;
    const NM = multipliers.length;
    
    const cache = {};
    const genKey = (left, times) => `${left}:${times}`;

    const dfs = (left, times) => {
        const key = genKey(left, times);
        
        if (times >= NM) return 0;
        if (cache[key] !== undefined) return cache[key];
        
        const right = N - 1 - (times - left);
        
        const leftValue = nums[left] * multipliers[times] + dfs(left + 1, times + 1);
        const rightValue = nums[right] * multipliers[times] + dfs(left, times + 1);
        
        return cache[key] = Math.max(leftValue, rightValue);
    }

    
    return dfs(0, 0);
};