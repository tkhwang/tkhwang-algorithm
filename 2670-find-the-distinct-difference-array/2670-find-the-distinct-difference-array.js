/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const N = nums.length;
    const res = [];
    
    for (const [ i, num ] of nums.entries()) {
        const prefix = new Set(nums.slice(0, i + 1));
        const suffix = new Set(nums.slice(i + 1));
    
        res.push(prefix.size - suffix.size);
    }
    
    return res;
};