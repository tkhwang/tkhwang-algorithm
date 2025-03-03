/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
    const N = nums.length;
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    nums.sort((a,b) => freq[b] - freq[a]);
    
    const mid = Math.floor(N/2);
    
    return target === nums[mid] && target === nums[0];
};