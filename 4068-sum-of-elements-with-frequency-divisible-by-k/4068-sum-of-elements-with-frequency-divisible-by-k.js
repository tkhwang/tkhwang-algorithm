/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    const freq = {};
    
    for (const num of nums) {
        freq[num] = (freq[num] ?? 0) + 1
    }

    let result = 0;

    for (const num of nums) {
        if (freq[num] % k === 0) result += num;
    }

    return result;
};