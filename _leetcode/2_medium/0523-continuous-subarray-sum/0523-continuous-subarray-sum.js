/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const N = nums.length;
    if (N === 1) return false;

    const cache = { 0 : -1 };
    let sum = 0;
    for (let i = 0; i < N; i += 1) {
        sum += nums[i];
        const r = sum % k;
    
        if (cache[r] === undefined) cache[r] = i;
        else if (i - cache[r] >= 2) return true;
    
    }
    return false;
};