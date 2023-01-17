/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const max = Math.max(...nums);
    
    const points = {};
    for (const num of nums) {
        points[num] = (points[num] || 0) + num;
    }
    
    const cache = {};
    const dp = (num) => {
        if (num === 0) return 0;
        if (num === 1) return points[1] || 0;
        if (cache[num] !== undefined) return cache[num];
        
        return cache[num] = Math.max(
            dp(num-1),
            dp(num-2) + points[num] || 0
        );
    }
    
    return dp(max)
};