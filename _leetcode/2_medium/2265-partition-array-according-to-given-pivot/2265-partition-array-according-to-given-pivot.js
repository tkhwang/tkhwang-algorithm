/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const N = nums.length;
    
    const lowers = [];
    const same = [];
    const highers = [];
    
    for (let i = 0; i < N; i += 1) {
        const cur = nums[i];
        
        if (cur > pivot) highers.push(cur);
        else if (cur < pivot) lowers.push(cur);
        else if (cur === pivot) same.push(cur);
    }
    
    return [
        ...lowers,
        ...same,
        ...highers
    ]
};