/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    const freq = {};
    
    for (const [ i, num ] of nums.entries()) {
        if (num !== key) continue;
        
        const target = nums[i+1];
        freq[target] = (freq[target] || 0) + 1;
    }
    
    const keys = Object.keys(freq);
    keys.sort((a,b) => freq[b] - freq[a]);
    
    return keys[0];
};