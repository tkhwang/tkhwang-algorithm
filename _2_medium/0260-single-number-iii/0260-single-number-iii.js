/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const N = nums.length;

    const counts = {};

    for (const ch of nums) {
        counts[ch] = (counts[ch] || 0) + 1;
    }

    const keys = Object.keys(counts);

    return keys.filter((key) => counts[key] === 1);
};