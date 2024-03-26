/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const set = new Set();
    for (const num of nums) {
        set.add(num);
    }
    
    for (let i = 1; ; i += 1) {
        if (set.has(i)) continue;
        
        return i;
    }    
};