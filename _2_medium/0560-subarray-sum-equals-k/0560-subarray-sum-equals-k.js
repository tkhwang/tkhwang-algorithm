/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    const obj = { 0: 1 };
    let sum = 0;
    let res = 0;
    
    for (const num of nums) {
        sum += num;
        
        if (obj[sum - k] !== undefined) res += obj[sum - k];
        obj[sum] = (obj[sum] || 0) + 1;
    }
    
    return res;
};