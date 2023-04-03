/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const freq = {};
    
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }
    
    const keys = Object.keys(freq);
    keys.sort((a,b) => freq[b] - freq[a]);
    
    return keys[0];
};