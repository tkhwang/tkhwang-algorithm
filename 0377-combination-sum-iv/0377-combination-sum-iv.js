/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const N = nums.length;
    const cache = {};
    
    const backtrack = (remain) => {
        if (remain === 0) return 1;
        if (remain < 0) return 0;
        if (cache[remain] !== undefined) return cache[remain];
        
        let res = 0;
        for (const num of nums) {
            if (remain - num < 0) continue;
            
            res += backtrack(remain - num);
        }
        
        return cache[remain] = res;
    }
    
    return backtrack(target)
};