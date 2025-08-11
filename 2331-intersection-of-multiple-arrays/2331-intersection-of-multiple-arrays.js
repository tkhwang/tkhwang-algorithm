/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const freq = {};
    
    for (const num of nums) {
        for (const n of num) {
            freq[n] = (freq[n] || 0) + 1
        }
    }
    
    return Object.keys(freq).filter((key) => freq[key] === nums.length).map(Number)
}