/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    const N = nums.length;
    
    let minIndex = -1;
    let maxIndex = -1;
    let badIndex = -1;
    
    let res = 0;
    
    for (const [ i, num ] of nums.entries()) {
        if (num < minK || maxK < num) badIndex = i;
        if (minK === num) minIndex = i;
        if (maxK === num) maxIndex = i;
    
        res += Math.max(
               0,
               Math.min(minIndex, maxIndex) - badIndex
        )
    }
    
    return res;
};