/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const N = nums.length;

    const set = new Set(nums);

    const result = [];

    for (let i = 1; i <= N; i += 1) {
        if (!set.has(i)) result.push(i);
    }

    return result;
};