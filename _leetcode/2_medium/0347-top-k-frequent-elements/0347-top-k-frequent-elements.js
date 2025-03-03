/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = {};
    
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    const keys = Object.keys(freq);
    keys.sort((a, b) => freq[b] - freq[a]);
    
    return keys.slice(0, k);
};