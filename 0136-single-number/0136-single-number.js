/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] ?? 0) + 1;
    }

    for (const num of nums) {
        if (freq[num] === 1) return num;
    }
    return -1;
};