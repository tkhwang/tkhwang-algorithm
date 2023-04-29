/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const freq = {};
    
    for (const num of nums) {
        if (freq[num] !== undefined) return num;
        freq[num] = num;
    }
};