/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const N = nums.length;
    
    const obj = { 0: 1 };
    let prefix = 0;
    let res = 0;
    
    for (const num of nums) {
        prefix = (k + prefix + num % k) % k;
        res += obj[prefix] || 0;
        obj[prefix] = (obj[prefix] || 0) + 1;
    }
    
    return res;
};