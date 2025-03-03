/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    const keys = Object.keys(freq).filter((v) => freq[v] === 1);
    
    return keys.length === 0 ? -1 : keys.pop();
};