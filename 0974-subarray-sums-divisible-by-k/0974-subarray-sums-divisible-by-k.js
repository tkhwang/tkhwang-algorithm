/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const N = nums.length;

    let prefixSum = 0;
    let count = 0;
    let obj = { 0: 1 };
    
    for (let i = 0; i < N; i += 1) {
        prefixSum = (prefixSum + nums[i]) % k;
        if (prefixSum < 0) prefixSum = prefixSum + k;
        
        if (obj[prefixSum] !== undefined )count += obj[prefixSum]
        obj[prefixSum] = (obj[prefixSum] || 0) + 1;
    }
    
    return count;
 };