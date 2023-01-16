/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    const N = nums.length;
    const NM = multipliers.length;
    
    const cache = {};
    const genKey = (left, op) => `${left}:${op}`;
    
    const dp = (left, op) => {
        if (op >= NM) return 0;
        if (cache[genKey(left, op)] !== undefined) return cache[genKey(left, op)];
            
        const right = N - 1 - op + left;
        
        return cache[genKey(left, op)] = Math.max(
            // left
            nums[left] * multipliers[op] + dp(left + 1, op + 1),
            // right
            nums[right] * multipliers[op] + dp(left, op + 1)            
        )
    }
    
    return dp(0, 0)
};